from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from flask_pymongo import PyMongo
from flask_jwt_extended import create_access_token, jwt_required, JWTManager
from flask_bcrypt import Bcrypt
from config import Config
from routes.authRoute import auth_routes

FINHUB_API_KEY = "cv0ihfpr01qo8ssh0nigcv0ihfpr01qo8ssh0nj0"

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

@app.route('/news', methods=['GET'])
def get_stock_news():
    try:
        url = f"https://finnhub.io/api/v1/news?category=general&token={FINHUB_API_KEY}"
        response = requests.get(url)
        data = response.json()
        
        return jsonify(data[:10])  # Return top 10 news articles

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
