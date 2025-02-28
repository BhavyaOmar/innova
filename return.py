import pickle as pk
import numpy as np
import streamlit as st

# Load models
with open("return_1yr_model.pkl", "rb") as f:
    clf_1yr = pk.load(f)
with open("return_3yr_model.pkl", "rb") as f1:
    clf_3yr = pk.load(f1)
with open("return_5yr_model.pkl", "rb") as f2:
    clf_5yr = pk.load(f2)
with open("scaler.pkl", "rb") as fl:
    scaler = pk.load(fl)

# Streamlit Page Configuration
st.set_page_config(page_title="📈 Mutual Fund Return Predictor", layout="wide")

# Custom Styling
st.markdown(
    """
    <style>
        body { background-color: #f8f9fa; }
        .main { background-color: white; padding: 30px; border-radius: 10px; }
        .title { text-align: center; font-size: 36px; font-weight: bold; color: #2C3E50; }
        .stButton button { background-color: #27ae60 !important; color: white !important; font-size: 18px !important; }
        .stTextInput { font-size: 18px; }
        .stNumberInput { font-size: 18px; }
    </style>
    """,
    unsafe_allow_html=True,
)

# Sidebar
st.sidebar.image("https://cdn-icons-png.flaticon.com/512/1721/1721929.png", width=100)
st.sidebar.title("📊 Navigation")
page = st.sidebar.radio("Go to", ["🏡 Home", "📈 Predict Returns", "ℹ️ About"])

# Home Page
if page == "🏡 Home":
    st.markdown('<p class="title">Welcome to Mutual Fund Return Predictor 🚀</p>', unsafe_allow_html=True)
    st.write("This app helps you predict mutual fund returns based on historical data.")
    st.write("Navigate to **Predict Returns** from the sidebar to get started.")

# Prediction Page
elif page == "📈 Predict Returns":
    st.markdown('<p class="title">📊 Predict Mutual Fund Returns</p>', unsafe_allow_html=True)
    
    # User Inputs
    col1, col2 = st.columns(2)
    with col1:
        fund_size = st.number_input("💰 Enter the Fund Amount (₹)", min_value=1000, step=1000)
        fund_age_yr = st.number_input("📅 Enter the Fund Age (Years)", min_value=1, step=1)
    
    with col2:
        risk = st.selectbox("⚠️ Select the Risk Level", ["1️⃣ Low", "2️⃣ Medium", "3️⃣ High"])
        return_for_years = st.slider("📆 Select Prediction Duration (Years)", 1, 5)

    # Convert Risk to Numeric
    risk_mapping = {"1️⃣ Low": 1, "2️⃣ Medium": 2, "3️⃣ High": 3}
    risk_value = risk_mapping[risk]

    # Prepare Data for Prediction
    user_input = np.array([[fund_size, fund_age_yr, risk_value]])
    x_scaled = scaler.transform(user_input)

    # Prediction
    if st.button('🚀 Predict Returns'):
        if return_for_years < 1:
            st.error('❌ Please enter a valid number of years.')
        elif 1 <= return_for_years < 3:
            predicted_return = clf_1yr.predict(x_scaled)
        elif 3 <= return_for_years < 5:
            predicted_return = clf_3yr.predict(x_scaled)
        else:
            predicted_return = clf_5yr.predict(x_scaled)
        
        st.success(f'✅ Predicted Return: {predicted_return[0]:.2f}%')

# About Page
elif page == "ℹ️ About":
    st.markdown('<p class="title">ℹ️ About This App</p>', unsafe_allow_html=True)
    st.write("""
    - This application predicts the return on mutual funds based on fund size, age, and risk level.
    - It uses **machine learning models** trained on past mutual fund data.
    - Powered by **Streamlit** & **Scikit-Learn** for easy usability.
    - Developed by an AI Enthusiast! 😊
    """)
