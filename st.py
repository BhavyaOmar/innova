import pickle as pk
import numpy as np
import streamlit as st

# Page Configuration
st.set_page_config(page_title="Stock Market Risk Predictor", page_icon="📊", layout="centered")

# Custom Styling
st.markdown("""
    <style>
        .main {
            background-color: #f4f4f8;
        }
        h1 {
            color: #2E86C1;
            text-align: center;
            font-size: 36px;
        }
        .stButton>button {
            width: 100%;
            border-radius: 10px;
            background-color: #2E86C1;
            color: white;
            padding: 10px;
            transition: 0.3s;
        }
        .stButton>button:hover {
            background-color: #1B4F72;
        }
    </style>
""", unsafe_allow_html=True)

# Title
st.markdown("<h1>📊 Stock Market Risk Predictor</h1>", unsafe_allow_html=True)

# Load Models
with open("risk_model.pkl", "rb") as f:
    clf_risk = pk.load(f)
with open("scaler.pkl", "rb") as fl:
    scaler = pk.load(fl)

# Input Fields
st.sidebar.image("https://cdn.pixabay.com/photo/2016/08/20/06/09/stock-1603001_960_720.jpg", width=250)
st.sidebar.header("🔍 Enter Investment Details")

fund_size = st.sidebar.number_input("💰 Fund Amount")
sortino = st.sidebar.number_input("📈 Safe Return Score")
alpha = st.sidebar.number_input("📊 Alpha Value")
sd = st.sidebar.number_input("⚖️ Risk Stability Score")
beta = st.sidebar.number_input("📉 Stock Volatility")

# Process Input
user_input = np.array([[fund_size, sortino, alpha, sd, beta]])
x_scaled = scaler.transform(user_input)

# Prediction Logic
if st.sidebar.button('🚀 Predict Risk Level'):
    y = clf_risk.predict(x_scaled)

    if y[0] in [1, 2]:
        risk_level = "🟢 Low Risk - Safe for long-term investments ✅"
    elif y[0] in [3, 4]:
        risk_level = "🟡 Medium Risk - Consider market trends ⚠️"
    else:
        risk_level = "🔴 High Risk - High volatility, invest cautiously ❌"

    st.markdown(f"<h2 style='text-align:center; color: #2E86C1;'>📌 {risk_level}</h2>", unsafe_allow_html=True)

# Footer
st.markdown("---")
st.markdown("<p style='text-align:center;'>🔹 Built with ❤️ using Streamlit 🔹</p>", unsafe_allow_html=True)