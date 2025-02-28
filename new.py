import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn import metrics
import xgboost as xgb
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import LabelEncoder, StandardScaler, OneHotEncoder
import pickle as pk

df = pd.read_csv(r"C:\Users\shash\OneDrive\Desktop\python files\hackathon\finance.csv")

df.replace("-", np.nan,inplace=True)
df.dropna(axis=0, how='any',inplace=True)
df.drop(columns=['fund_manager','sub_category','expense_ratio','rating'],inplace=True)

input_features=df[['fund_size_cr','fund_age_yr','risk_level']]
print(input_features.head())

input_features = df[['fund_size_cr','fund_age_yr','risk_level']]
scaler = StandardScaler()
input_scaled = pd.DataFrame(scaler.fit_transform(input_features), columns=input_features.columns)

output_returns_3yr = df['returns_3yr'].clip(lower=df['returns_3yr'].quantile(0.05), upper=df['returns_3yr'].quantile(0.95))
output_returns_5yr = df['returns_5yr'].clip(lower=df['returns_5yr'].quantile(0.05), upper=df['returns_5yr'].quantile(0.95))
output_returns_1yr = df['returns_1yr'].clip(lower=df['returns_1yr'].quantile(0.05), upper=df['returns_1yr'].quantile(0.95))

x_train_3yr, x_test_3yr, y_train_3yr, y_test_3yr = train_test_split(input_scaled, output_returns_3yr, test_size=0.2, random_state=42)
x_train_5yr, x_test_5yr, y_train_5yr, y_test_5yr = train_test_split(input_scaled, output_returns_5yr, test_size=0.2, random_state=42)
x_train_1yr, x_test_1yr, y_train_1yr, y_test_1yr = train_test_split(input_scaled, output_returns_1yr, test_size=0.2, random_state=42)

xgb_params = {'n_estimators': [100, 200, 300], 'learning_rate': [0.05, 0.1, 0.2], 'max_depth': [3, 5, 7]}
clf_3yr = GridSearchCV(xgb.XGBRegressor(random_state=42), xgb_params, cv=5, scoring='r2').fit(x_train_3yr, y_train_3yr).best_estimator_
clf_5yr = GridSearchCV(xgb.XGBRegressor(random_state=42), xgb_params, cv=5, scoring='r2').fit(x_train_5yr, y_train_5yr).best_estimator_
clf_1yr = GridSearchCV(xgb.XGBRegressor(random_state=42), xgb_params, cv=5, scoring='r2').fit(x_train_1yr, y_train_1yr).best_estimator_

y_pred_3yr = clf_3yr.predict(x_test_3yr)
y_pred_5yr = clf_5yr.predict(x_test_5yr)
y_pred_1yr = clf_1yr.predict(x_test_1yr)

print("3-Year R² Score:", metrics.r2_score(y_test_3yr, y_pred_3yr))
print("5-Year R² Score:", metrics.r2_score(y_test_5yr, y_pred_5yr))
print("1-Year R² Score:", metrics.r2_score(y_test_1yr, y_pred_1yr))

pk.dump(clf_3yr, open("return_3yr_model.pkl", "wb"))
pk.dump(clf_5yr, open("return_5yr_model.pkl", "wb"))
pk.dump(clf_1yr, open("return_1yr_model.pkl", "wb"))
pk.dump(scaler, open("scaler.pkl", "wb"))