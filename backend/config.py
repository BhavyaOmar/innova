from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/Investmentdb")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "f8b3a24c9c4a8f5e7d3d2e6f4c9b1a2d3e5f7c8d9a1b2c3e5f7d8e9f0a1b2c3d")