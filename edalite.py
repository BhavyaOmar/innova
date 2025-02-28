import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn import metrics
import xgboost as xgb
from sklearn.linear_model import RidgeCV
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression,LogisticRegression
from sklearn.tree import DecisionTreeClassifier,DecisionTreeRegressor
from sklearn.ensemble import RandomForestClassifier,RandomForestRegressor
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder, StandardScaler, OneHotEncoder,FunctionTransformer
import pickle as pk

df = pd.read_csv(r"C:\Users\shash\OneDrive\Desktop\python files\hackathon\finance.csv")

df.replace("-", np.nan,inplace=True)
df.dropna(axis=0, how='any',inplace=True)
df.drop(columns=['fund_manager','sub_category','expense_ratio','fund_age_yr','rating','returns_1yr'],inplace=True)


le = LabelEncoder()
df['risk_level'] = le.fit_transform(df['risk_level'])

ohe=OneHotEncoder()
amc_encoded=ohe.fit_transform(df[['amc_name']]).toarray()
amc_encoded_df=pd.DataFrame(amc_encoded,columns=ohe.get_feature_names_out(['amc_name']))


df.drop(columns=['amc_name'],inplace=True)

input_features=df[['fund_size_cr','sortino','alpha','sd','beta','sharpe']]


scaler=StandardScaler()
input_scaled=pd.DataFrame(scaler.fit_transform(input_features),
                          columns=['fund_size_cr','sortino','alpha','sd','beta','sharpe'])

#final_input_features=pd.concat([input_scaled, amc_encoded_df], axis=1)

output_risk=df['risk_level']

per25=df['returns_3yr'].quantile(0.25)
per75=df['returns_3yr'].quantile(0.75)
iqr=per75-per25
lower_bound=per25-1.5*iqr
upper_bound=per75+1.5*iqr
output_returns_3yr=np.where(df['returns_3yr']<lower_bound,lower_bound,
                            np.where(df['returns_3yr']>upper_bound,upper_bound,df['returns_3yr']))

per25=df['returns_5yr'].quantile(0.25)
per75=df['returns_5yr'].quantile(0.75)
iqr=per75-per25
lower_bound=per25-1.5*iqr
upper_bound=per75+1.5*iqr
output_returns_5yr=np.where(df['returns_5yr']<lower_bound,lower_bound,
                            np.where(df['returns_5yr']>upper_bound,upper_bound,df['returns_5yr']))


x_train_risk,x_test_risk,y_train_risk,y_test_risk=train_test_split(input_scaled,
                                                                   output_risk,test_size=0.2,random_state=42)
x_train_3yr,x_test_3yr,y_train_3yr,y_test_3yr=train_test_split(input_scaled,
                                                                   output_returns_3yr,test_size=0.2,random_state=42)
x_train_5yr,x_test_5yr,y_train_5yr,y_test_5yr=train_test_split(input_scaled,
                                                                   output_returns_5yr,test_size=0.2,random_state=42)


clf_risk=LogisticRegression(random_state=42)
clf_risk.fit(x_train_risk,y_train_risk)

clf_3yr=xgb.XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=5, random_state=42)  
clf_3yr.fit(x_train_3yr,y_train_3yr)

clf_5yr=xgb.XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=5, random_state=42)  
clf_5yr.fit(x_train_5yr,y_train_5yr)

y_predict_train_risk=clf_risk.predict(x_train_risk)
y_predict_test_risk=clf_risk.predict(x_test_risk)


y_predict_train_3yr=clf_3yr.predict(x_train_risk)
y_predict_test_3yr=clf_3yr.predict(x_test_risk)

y_predict_train_5yr=clf_5yr.predict(x_train_risk)
y_predict_test_5yr=clf_5yr.predict(x_test_risk)

print(accuracy_score(y_train_risk,y_predict_train_risk))
print(accuracy_score(y_test_risk,y_predict_test_risk))

score_r2_3yr=metrics.r2_score(y_test_3yr,y_predict_test_3yr)
score_mae_3yr=metrics.mean_absolute_error(y_test_3yr,y_predict_test_3yr)
print("Training R² score:",score_r2_3yr)
print("Training MAE:",score_mae_3yr)

score_r2_5yr=metrics.r2_score(y_test_5yr,y_predict_test_5yr)
score_mae_5yr=metrics.mean_absolute_error(y_test_5yr,y_predict_test_5yr)
print("Training R² score:",score_r2_5yr)
print("Training MAE:",score_mae_5yr)

pk.dump(clf_risk,open("risk_model.pkl","wb"))
# pk.dump(clf_3yr,open("return_3yr_model.pkl","wb"))
# pk.dump(clf_5yr,open("return_5yr_model.pkl","wb"))
pk.dump(scaler,open("scaler.pkl","wb"))
pk.dump(ohe,open("ohe.pkl","wb"))
