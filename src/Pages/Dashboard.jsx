import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Dashboard = () => {

  const [logs, setLogs] = useState([]);
  const logRef = useRef(null);
  const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/news");
                setNews(response.data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
        const interval = setInterval(fetchNews, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      if (logRef.current) {
        logRef.current.scrollTop = logRef.current.scrollHeight;
      }
    }, [logs]);

  return (
    <div className="h-fit mt-24 mx-8">
      <div className="my-10">
        <h1 className="text-3xl my-2">User Dashboard</h1>
      </div>

      <div className="data my-8 flex justify-around">
        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$0</h1>
        </div>

        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$20,560</h1>
        </div>

        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$20,560</h1>
        </div>

        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$20,560</h1>
          <p className="message">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="flex mt-24 px-8 justify-between items-start h-fit">
        <div className="display w-full h-fit">
          <h1 className="text-3xl my-2">Investment Advisor</h1>

          <div className="userInput h-fit my-8 rounded-xl p-8">
            <div className="my-4">
              <h1 className="font-bold">Investment Amount</h1>
              <input
                type="text"
                className="border my-2 w-full rounded-md text"
              />
              <p>Total amount you want to invest.</p>
            </div>

            <div className="flex my-12 gap-4">
              <div>
                <h1 className="font-bold">Investment Timeframe</h1>
                <input
                  type="text"
                  className="border my-2 w-full rounded-md text"
                />
                <p>Time (in years) after which you want to get return.</p>
              </div>

              <div>
                <h1 className="font-bold">Risk Tolerence</h1>
                <select
                  id="options"
                  name="options"
                  className="border my-2 w-full rounded-md text"
                >
                  <option value="option1">Low Risk</option>
                  <option value="option2">Medium Risk</option>
                  <option value="option3">High Risk</option>
                </select>
                <p>Select your preferences.</p>
              </div>
            </div>

            <div className="flex w-[100%] gap-10 justify-center items-center">
              <button className="border rounded-xl px-3 py-2 w-[45%] btn cursor-pointer">
                Get Recommendations
              </button>
              <button className="border rounded-xl px-3 py-2 w-[45%] btn cursor-pointer">
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl p-4 news overflow-y-scroll">
          <h1>Live Stocks News</h1>
          {news.map((article, index) => (
                <div key={index} style={{  padding: "10px", margin: "10px" }}>
                    <h3>• {article.headline}</h3>
                    <p>{article.summary}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
