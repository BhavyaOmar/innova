from flask import Flask
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import os

load_dotenv('../.env.local')

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Investmentdb"
mongo = PyMongo(app)


class User:
    @staticmethod
    def create_user(name, email, password):
        hashed_password = generate_password_hash(password)
        user_data = {"name":name, "email": email, "password": hashed_password}
        mongo.db.userdb.insert_one(user_data)
        return user_data

    @staticmethod
    def find_user(email):
        return mongo.db.userdb.find_one({"email": email})

    @staticmethod
    def check_password(stored_password, provided_password):
        return check_password_hash(stored_password, provided_password)
