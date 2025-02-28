import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn import metrics

from sklearn.linear_model import LinearRegression,LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import LabelEncoder, StandardScaler, OneHotEncoder
import pickle as pk

df = pd.read_csv(r"C:\Users\shash\OneDrive\Desktop\python files\hackathon\finance.csv")

df.replace("-",np.nan,inplace=True)
df = df.reset_index(drop=True)

for col in ['sortino', 'alpha', 'sd', 'beta', 'returns_3yr', 'returns_5yr', 'returns_1yr']:
    df[col] = pd.to_numeric(df[col], errors='coerce')

df['category'] = df['category'].map({"Equity": 0, "Debt": 1, "Hybrid": 2, "Solution Oriented": 3, "Others": 4})
cat=df['category']
df.fillna(df.mean(numeric_only=True), inplace=True)

df.drop(columns=['fund_manager', 'sub_category', 'expense_ratio', 'fund_age_yr', 'rating', 'scheme_name'], inplace=True)

le = LabelEncoder()
df['risk_level'] = le.fit_transform(df['risk_level'])

le = LabelEncoder()
cat=le.fit_transform(cat)

ohe = OneHotEncoder()
amc_encoded = ohe.fit_transform(df[['amc_name']]).toarray()
amc_encoded_df = pd.DataFrame(amc_encoded, columns=ohe.get_feature_names_out(['amc_name']))
df.drop(columns=['amc_name'], inplace=True)

input_features = df[['fund_size_cr', 'sortino', 'alpha', 'sd', 'beta',]]
scaler = StandardScaler()
input_scaled = pd.DataFrame(scaler.fit_transform(input_features), columns=input_features.columns)

#final_input_features = pd.concat([input_scaled, amc_encoded_df], axis=1)

output_risk = df['risk_level']
output_category = cat

x_train_risk, x_test_risk, y_train_risk, y_test_risk = train_test_split(input_scaled , output_risk, test_size=0.2, random_state=42)
x_train_cat, x_test_cat, y_train_cat, y_test_cat = train_test_split(input_scaled , output_category, test_size=0.2, random_state=42)

clf_risk=GridSearchCV(RandomForestClassifier(random_state=42),{'n_estimators':[100,200,300],'max_depth':[3,5,7]},cv=5,scoring='accuracy').fit(x_train_risk,y_train_risk).best_estimator_
clf_risk.fit(x_train_risk, y_train_risk)

clf_cat=GridSearchCV(RandomForestClassifier(random_state=42),{'n_estimators':[100,200,300],'max_depth':[3,5,7]},cv=5,scoring='accuracy').fit(x_train_risk,y_train_risk).best_estimator_
clf_cat.fit(x_train_cat, y_train_cat)

y_pred_risk = clf_risk.predict(x_test_risk)
y_pred_cat = clf_cat.predict(x_test_cat)

print("Risk Classification Accuracy:", metrics.accuracy_score(y_test_risk, y_pred_risk))
print("Category Classification Accuracy:", metrics.accuracy_score(y_test_cat, y_pred_cat))  

pk.dump(clf_risk,open("risk_model.pkl", "wb"))
pk.dump(scaler,open("scaler.pkl", "wb"))
pk.dump(ohe,open("ohe.pkl", "wb"))
pk.dump(clf_cat,open("cat.pkl", "wb"))
