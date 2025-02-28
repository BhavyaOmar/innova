from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from config import Config
from routes.authRoute import auth_routes

app = Flask(__name__)
app.config.from_object(Config)

mongo = PyMongo(app)
jwt = JWTManager(app)

app.register_blueprint(auth_routes, url_prefix="/auth")
# app.register_blueprint(risk_routes, url_prefix="/risk")

if __name__ == "__main__":
    app.run(debug=True)
