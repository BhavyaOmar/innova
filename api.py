import streamlit as st
import requests


API_KEY="cv09em9r01qo8ssffh0gcv09em9r01qo8ssffh10"
url=f"https://finnhub.io/api/v1/news?category=general&token={API_KEY}"

response=requests.get(url)
data=response.json()


st.title("📈Latest Stock Market News")


for article in data[:6]:
    title=article.get("headline","No Title Available")
    source=article.get("source","Unknown Source")
    url=article.get("url","#")
    st.subheader(title)
    st.write(f"Source:{source}")
    st.markdown(f"[Read More]({url})")
