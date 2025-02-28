import pickle as pk
import numpy as np
import streamlit as st
import time

# ---- Streamlit Page Config ----
st.set_page_config(page_title="Fund Risk Classifier", layout="centered")

# ---- CSS for Styling ----
st.markdown("""
    <style>
        body {
            background-color: #f5f7fa;
            font-family: Arial, sans-serif;
        }
        .title {
            color: #4A90E2;
            text-align: center;
            font-size: 36px;
            font-weight: bold;
        }
        .stButton>button {
            background-color: #4A90E2;
            color: white;
            font-size: 18px;
            border-radius: 8px;
        }
        .result-box {
            background-color: #e0f7fa;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
    </style>
""", unsafe_allow_html=True)

# ---- Title ----
st.markdown('<p class="title">📊 Fund Risk Classification App</p>', unsafe_allow_html=True)

# ---- Load Model ----
with open("cat.pkl", "rb") as f:
    clf_risk = pk.load(f)
with open("scaler.pkl", "rb") as fl:
    scaler = pk.load(fl)

# ---- User Input Fields ----
st.subheader("📌 Enter Fund Details")
fund_size = st.number_input("💰 Enter the Fund Amount (in ₹)", min_value=0.0, format="%.2f")
sortino = st.number_input("📉 Enter Recent Negative Fluctuations in Market", min_value=0.0, format="%.2f")
alpha = st.number_input("📈 Enter the Market Performance (Alpha)", min_value=-10.0, max_value=10.0, format="%.2f")
sd = st.number_input("📊 Enter Market Volatility or Fluctuations (Standard Deviation)", min_value=0.0, format="%.2f")
beta = st.number_input("⚖️ Enter the PR in Market (Beta)", min_value=0.0, format="%.2f")

# ---- Process Input ----
user_input = np.array([[fund_size, sortino, alpha, sd, beta]])
x_scaled = scaler.transform(user_input)

# ---- Prediction ----
if st.button('🚀 Classify Fund Risk'):
    with st.spinner("Analyzing risk and finding the best fund type..."):
        time.sleep(2)  # Simulating processing time
        y = clf_risk.predict(x_scaled)
        
        # Display Result
        st.subheader("🔹 Classification Result")
        if y[0] == 0:
            st.markdown('<p class="result-box">✅ Good for Long-Term Financial Goals</p>', unsafe_allow_html=True)
            st.success("Recommended: **Equity Funds** 🏦")
        elif y[0] == 1:
            st.markdown('<p class="result-box">📌 Best for Short-Term Financial Goals</p>', unsafe_allow_html=True)
            st.success("Recommended: **Debt Funds** 💳")
        elif y[0] == 2:
            st.markdown('<p class="result-box">📊 Suitable for Medium-Term Financial Goals</p>', unsafe_allow_html=True)
            st.success("Recommended: **Hybrid Funds** ⚖️")
        elif y[0] == 3:
            st.markdown('<p class="result-box">🎯 Solution-Oriented Financial Goals</p>', unsafe_allow_html=True)
            st.success("Recommended: **Solution-Oriented Funds** 🏆")
        else:
            st.markdown('<p class="result-box">💡 Other Fund Types</p>', unsafe_allow_html=True)
            st.success("Consider consulting a financial advisor.")

