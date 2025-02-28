from flask import Flask, request, jsonify
import pickle
import numpy as np

# Load models
with open("return_1yr_model.pkl", "rb") as f:
    clf_1yr = pickle.load(f)
with open("return_3yr_model.pkl", "rb") as f1:
    clf_3yr = pickle.load(f1)
with open("return_5yr_model.pkl", "rb") as f2:
    clf_5yr = pickle.load(f2)
with open("scaler.pkl", "rb") as fl:
    scaler = pickle.load(fl)

# Initialize Flask app
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from request
        data = request.json

        # Extract input values
        fund_size = float(data.get("fund_size", 0))
        fund_age_yr = float(data.get("fund_age_yr", 0))
        risk = float(data.get("risk", 1))
        return_for_years = float(data.get("return_for_years", 1))

        # Validate input
        if return_for_years < 1:
            return jsonify({"error": "Please enter a valid number of years"}), 400

        # Prepare input for prediction
        user_input = np.array([[fund_size, fund_age_yr, risk]])
        x_scaled = scaler.transform(user_input)

        # Select the correct model based on years
        if 1 <= return_for_years < 3:
            predicted_return = clf_1yr.predict(x_scaled)
        elif 3 <= return_for_years < 5:
            predicted_return = clf_3yr.predict(x_scaled)
        else:
            predicted_return = clf_5yr.predict(x_scaled)

        # Return JSON response
        return jsonify({"predicted_return": float(predicted_return[0])})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True)
