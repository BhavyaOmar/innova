import React from "react";

const Dashboard = () => {
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

      <div className="flex mt-10 px-8 justify-between items-center h-fit">
        <div className="display">
          <h1>Pta nhi kya krna hai iss section ka</h1>
        </div>

        <div className="flex flex-col h-[45vh] rounded-2xl p-4 news">
          <h1>Live Stocks News</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
