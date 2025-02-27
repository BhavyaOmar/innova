from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from models.auth import User

auth_routes = Blueprint("auth_routes", __name__)

@auth_routes.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if User.find_user(data["email"]):
        return jsonify({"message": "User already exists"}), 400

    User.create_user(data["name"], data["email"], data["password"])
    return jsonify({"message": "User registered successfully"}), 201

@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.find_user(data["email"])
    
    if not user or not User.check_password(user["password"], data["password"]):
        return jsonify({"message": "Invalid credentials"}), 401

    access_token = create_access_token(identity=data["email"])
    return jsonify({"access_token": access_token}), 200
