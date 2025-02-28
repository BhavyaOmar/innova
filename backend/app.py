from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_jwt_extended import create_access_token, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from config import Config
from routes.authRoute import auth_routes

app = Flask(__name__)
CORS(app)
bcrypt = Bcrypt(app)
app.config.from_object(Config)

mongo = PyMongo(app)
jwt = JWTManager(app)

# CORS(app, resources={r"/*": {"origins": "http://localhost:5173/"}}, supports_credentials=True)
CORS(app, resources={r"/*": {"origins": "*", "supports_credentials": True}})

app.register_blueprint(auth_routes, url_prefix="/auth")
# app.register_blueprint(risk_routes, url_prefix="/risk")

if __name__ == "__main__":
    app.run(debug=True)
