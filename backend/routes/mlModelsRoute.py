from flask import Blueprint, request, jsonify
import numpy as np
# from models.mlModels import Finuser
import pickle
import os

auth_routes = Blueprint("auth_routes", __name__)

with open("return_1yr_model.pkl", "rb") as f:
    clf_1yr = pickle.load(f)
with open("return_3yr_model.pkl", "rb") as f1:
    clf_3yr = pickle.load(f1)
with open("return_5yr_model.pkl", "rb") as f2:
    clf_5yr = pickle.load(f2)
with open("scaler.pkl", "rb") as fl:
    scaler = pickle.load(fl)

class Finuser:
    @staticmethod
    def fund(fund_size, fund_age, risk):
        fund_data = np.array([[fund_size, fund_age, risk]])
        return scaler.transform(fund_data)

@auth_routes.route("/predict", methods=["POST"])
def output(fund_size, fund_age, risk, return_yr):
    data = Finuser.fund(fund_size, fund_age, risk)
    if return_yr ==1:
        return clf_1yr.predict(data)
    elif return_yr==3:
        return clf_3yr.predict(data)
    elif return_yr==5:
        return clf_5yr.predict(data)