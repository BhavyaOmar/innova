from flask import Flask
import numpy as np
import pickle

with open("risk_model.pkl", "rb") as g:
    risk = pickle.load(g)
with open("scaler.pkl", "rb") as fl:
    scaler = pickle.load(fl)

class Userrisk:
    def fund(fund_size, sortino, alpha, sd, beta):
        risk_data = np.array([[fund_size, sortino, alpha, sd, beta]])
        return scaler.transform(risk_data)