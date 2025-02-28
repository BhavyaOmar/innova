import pickle as pk
import numpy as np
import streamlit as st


with open("cat.pkl", "rb") as f:
    clf_risk = pk.load(f)
with open("scaler.pkl", "rb") as fl:                                                                                                                                                                                         
    scaler = pk.load(fl)


fund_size = st.number_input("Enter the fund amount")
sortino = st.number_input("Enter the recent negative fluctuations in the market")
alpha = st.number_input("Enter the performance of the market")
sd = st.number_input("Enter Market volatility or fluctuations")
beta = st.number_input("Enter the PR in market")

user_input=np.array([[fund_size,sortino,alpha,sd,beta]])

x_scaled=scaler.transform(user_input)


if st.button('Submit'):
    y=clf_risk.predict(x_scaled)
    if y[0]==0:
        st.success('Good for long term financial goals')
        st.success('Equity funds')
    elif y[0]==1:
        st.success('short term financial goals')
        st.success('Debt funds')
    elif y[0]==2:
        st.success('medium term financial goals')
        st.success('Hybrid funds')
    elif y[0]==3:
        st.success('solution oriented financial goals')
        st.success('solution oriented funds')
    else:
        st.success('Others funds')
