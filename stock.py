import streamlit as st
import yfinance as yf
import xgboost as xgb
import pandas as pd
import numpy as np
import time
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split


st.set_page_config(page_title="Stock Market Predictor", layout="wide")


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
    </style>
""", unsafe_allow_html=True)


st.markdown('<p class="title">📈 Stock Market Prediction App</p>', unsafe_allow_html=True)

stock_symbol = st.text_input("Enter Stock Symbol (e.g. TCS.NS):", placeholder="Enter Stock Symbol")

if st.button("🚀 Predict Price"):
    if stock_symbol:
        with st.spinner("Fetching Data & Predicting..."):
            time.sleep(2)


            data = yf.download(stock_symbol, period="60d", interval="1d")

            if data.empty:
                st.error("⚠️ Invalid Stock Symbol or No Data Available!")
            else:

                X = data[['Open', 'High', 'Low', 'Volume']]
                y = data['Close']
                X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


                model = xgb.XGBRegressor(objective='reg:squarederror', n_estimators=100)
                model.fit(X_train, y_train)


                prediction = model.predict([X.iloc[-1]])
                predicted_price = round(prediction[0], 2)


                st.success(f"📊 Predicted Closing Price for **{stock_symbol}**: ₹{predicted_price:.2f}")


                fig, ax = plt.subplots(figsize=(10, 5))
                ax.plot(data.index, data["Close"], label="Actual Closing Price", color="blue", linestyle="-")
                ax.scatter(data.index[-1], predicted_price, color="red", label="Predicted Price", zorder=3)
                
                ax.set_title(f"{stock_symbol} Stock Price Trend")
                ax.set_xlabel("Date")
                ax.set_ylabel("Price (₹)")
                ax.legend()
                ax.grid(True)


                st.pyplot(fig)

    else:
        st.warning("⚠️ Please enter a valid stock symbol.")
