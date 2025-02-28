import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffbb28", "#ff8042", "#ff4560"];

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
      <h1 className="text-2xl font-bold mb-4 text-center">
        Schemes for {decodeURIComponent(amc)}
      </h1>

      {schemes.length > 0 ? (
        <>
          <ol type="1" className="space-y-2 border">
            {schemes.map((scheme, index) => (
              <li key={index} className=" p-2 rounded-lg shadow-md">
                <p className="font-bold">{scheme.scheme_name}</p>
                <p className=" text-gray-500">Category: {scheme.category}</p>
              </li>
            ))}
          </ol>

          <h2 className="text-xl font-semibold my-4 text-center">
            Fund Size Comparison
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={schemes}>
              <XAxis dataKey="scheme_name" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fund_size" fill="#8884d8" name="Fund Size (₹Cr)" />
            </BarChart>
          </ResponsiveContainer>

          <h2 className="text-xl font-semibold my-4 text-center">
            Returns Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={schemes}>
              <XAxis dataKey="scheme_name" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="returns.1_year"
                stroke="#8884d8"
                name="1-Year Return"
              />
              <Line
                type="monotone"
                dataKey="returns.3_years"
                stroke="#82ca9d"
                name="3-Year Return"
              />
              <Line
                type="monotone"
                dataKey="returns.5_years"
                stroke="#ff4560"
                name="5-Year Return"
              />
            </LineChart>
          </ResponsiveContainer>

          <h2 className="text-xl font-semibold my-4 text-center">
            Fund Age Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={schemes}>
              <XAxis dataKey="scheme_name" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fund_age" fill="#8884d8" name="Fund Age (Years)" />
            </BarChart>
          </ResponsiveContainer>

          {/* 📡 Radar Chart - Risk Level */}
          <h2 className="text-xl font-semibold my-4 text-center">
            Risk Level Comparison
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={schemes}>
              <PolarGrid />
              <PolarAngleAxis dataKey="scheme_name" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis />
              <Radar
                name="Risk Level"
                dataKey="risk_level"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <p>No schemes available for this AMC.</p>
      )}
    </div>
  );
};

export default CompanyInfo;
