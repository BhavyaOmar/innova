from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from flask_cors import cross_origin
from models.auth import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
auth_routes = Blueprint("auth_routes", __name__)

@auth_routes.route("/register", methods=["POST", "OPTIONS"])
@cross_origin()
def register():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        response = jsonify({"message": "CORS preflight successful"})
        response.headers["Access-Control-Allow-Origin"] = "http://localhost:5173/signup"
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response, 204  # Return empty response for preflight
    
    data = request.get_json()
    if not data or "name" not in data or "email" not in data or "password" not in data:
        return jsonify({"message": "Missing fields"}), 400

    if User.find_user(data["email"]):
        return jsonify({"message": "User already exists"}), 400

    # Hash password before saving
    hashed_password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")
    
    # Store user
    User.create_user(data["name"], data["email"], hashed_password)

    return jsonify({"message": "User registered successfully"}), 201

@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data or "email" not in data or "password" not in data:
        return jsonify({"message": "Missing email or password"}), 400

    user = User.find_user(data["email"])
    
    if not user or not bcrypt.check_password_hash(user["password"], data["password"]):
        return jsonify({"message": "Invalid credentials"}), 401

    # Create JWT token
    access_token = create_access_token(identity=data["email"])

    
    return jsonify({"access_token": access_token}), 200
