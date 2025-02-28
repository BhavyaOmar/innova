from flask import Flask
import numpy as np
import pickle
from models.risk import Userrisk

with open("risk_model.pkl", "rb") as g:
    risk = pickle.load(g)

def retrisk(fund_size, sortino, alpha, sd, beta):
    scaled_risk = Userrisk.fund(fund_size, sortino, alpha, sd, beta)
    output = risk.predict(scaled_risk)
    if output[0]==0 and output[0]==1:
        print("Low risk")
    elif output[0]==2 and output[0]==3:
        print("medium risk")
    else:
        print("high")