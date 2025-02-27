from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from config import Config
from routes.authRoute import access_token
from dotenv import load_dotenv
import os

load_dotenv('../.env.local')

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "f8b3a24c9c4a8f5e7d3d2e6f4c9b1a2d3e5f7c8d9a1b2c3e5f7d8e9f0a1b2c3d"

# class Authuser:
#     @staticmethod
#     # def 