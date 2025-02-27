import React, { useState } from "react";
import "../App.css";
import names from "../jsonData/amc_names.json";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  const updateInput = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      setFilteredNames(
        names.filter((name) => name.toLowerCase().includes(input.toLowerCase()))
      );
    } else {
      setFilteredNames([]);
    }
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={updateInput}
        />
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index} onClick={() => setQuery(name)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
