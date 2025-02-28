import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CompanyInfo = () => {
  const { amc } = useParams();
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("/structured_finance_data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const decodedAMC = decodeURIComponent(amc);
        if (data[decodedAMC]) {
          setSchemes(data[decodedAMC]);
        } else {
          console.log(`No schemes found for AMC: ${decodedAMC}`);
          setSchemes([]);
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [amc]);

  return (
    <div className="container mx-auto p-6 my-20">
      <h1 className="text-2xl font-bold mb-4">
        Schemes for {decodeURIComponent(amc)}
      </h1>

      {schemes.length > 0 ? (
        <ul className="space-y-2">
          {schemes.map((scheme, index) => (
            <li key={index} className="border p-2 rounded-lg shadow-md">
              <p className="font-bold" style={{ textAlign: "center" }}>
                {scheme.scheme_name}
              </p>
              <p>Category: {scheme.category}</p>
              <p>Fund Size: ₹{scheme.fund_size} Cr</p>
              <p>Fund Age: {scheme.fund_age} years</p>
              <p>Risk Level: {scheme.risk_level}/6</p>
              <p>Returns (1yr): {scheme.returns["1_year"]}%</p>
              <p>Returns (3yr): {scheme.returns["3_years"]}%</p>
              <p>Returns (5yr): {scheme.returns["5_years"]}%</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No schemes available for this AMC.</p>
      )}
    </div>
  );
};

export default CompanyInfo;
