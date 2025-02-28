import pickle as pk
import numpy as np
import streamlit as st


with open("risk_model.pkl", "rb") as f:
    clf_risk = pk.load(f)
with open("scaler.pkl", "rb") as fl:                                                                                                                                                                                         
    scaler = pk.load(fl)


fund_size = st.number_input("Enter the fund amount")
sortino = st.number_input("Enter the Safe return score for your investment")
alpha = st.number_input("Enter the Alpha of the stock")
sd = st.number_input("Enter risk stability score")
beta = st.number_input("Enter the stock volatility")


user_input=np.array([[fund_size,sortino,alpha,sd,beta]])


x_scaled=scaler.transform(user_input)


if st.button('Submit'):
    y=clf_risk.predict(x_scaled)
    if y[0]==1 and y[0]==2:
        st.success('Low Risk')
    elif y[0]==4 and y[0]==3:
        st.success('Medium Risk')
    else:
        st.success('High Risk') 
