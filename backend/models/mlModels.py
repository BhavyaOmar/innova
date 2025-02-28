from flask import Flask
import numpy as np
import pickle
import os

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