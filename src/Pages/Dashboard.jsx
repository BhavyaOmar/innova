import React from "react";
import { useState } from "react";

const Dashboard = () => {

  const [value, setValue] = useState(50);

  return (
    <div className="h-fit mt-24 mx-8">
      <div className="my-10">
        <h1 className="text-3xl my-2">User Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum nesciunt eveniet deleniti quam libero ullam.</p>
      </div>

      <div className="data my-8 flex justify-around">
        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$20,560</h1>
          <p className="message">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$20,560</h1>
          <p className="message">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="card border w-fit">
          <h1 className="title">Total Portfolio Value</h1>
          <h1 className="data">$20,560</h1>
          <p className="message">Lorem ipsum dolor sit amet.</p>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, accusantium!</p>

          <div className="userInput h-fit my-8 rounded-xl p-8">
            <div className="my-4">
              <h1 className="font-bold">Investment Amount</h1>
              <input type="text" className="border my-2 w-full rounded-md text"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</p>
            </div>

            <div className="flex my-12 gap-4">
              <div>
                <h1 className="font-bold">Investment Timeframe</h1>
                <input type="text"  className="border my-2 w-full rounded-md text"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</p>
              </div>

              <div>
                <h1 className="font-bold">Risk Tolerence</h1>
                <select id="options" name="options" className="border my-2 w-full rounded-md text">
                  <option value="option1">Low Risk</option>
                  <option value="option2">Medium Risk</option>
                  <option value="option3">High Risk</option>
                </select>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit.</p>
              </div>
            </div>

            <div className="flex w-[100%] gap-10 justify-center items-center">
              <button className="border rounded-xl px-3 py-2 w-[45%] btn">Get Recommendations</button>
              <button className="border rounded-xl px-3 py-2 w-[45%] btn">Reset</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl p-4 news">
          <h1>Live Stocks News</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
