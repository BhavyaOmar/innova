import streamlit as st
import yfinance as yf
import xgboost as xgb
import pandas as pd
from sklearn.model_selection import train_test_split

st.title("Stock Market Prediction App")

stock_symbol=st.text_input("Enter Stock Symbol (e.g. TCS.NS)")


if st.button("Predict Price"):
    data = yf.download(stock_symbol,period="60d",interval="1d")
    X=data[['Open','High','Low','Volume']]
    y=data['Close']
    X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=42)

    model=xgb.XGBRegressor(objective='reg:squarederror',n_estimators=100)
    model.fit(X_train,y_train)

    prediction=model.predict([X.iloc[-1]])
    
    st.write(f"Predicted Closing Price for {stock_symbol}: ₹{prediction[0]:.2f}")
