import React from "react";
import "../App.css"

const SearchBar = () => {
  return (
    <>
      <div className="w-full">
        <input type="text" placeholder="Search" className="searchBar border w-full px-2 py-0.5 rounded-lg"/>
      </div>
    </>
  );
};

export default SearchBar;
