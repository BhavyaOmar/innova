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
      <div className="w-full">
        <input
          type="text"
          placeholder="Search"
          value={query}
          className="searchBar border w-full px-2 py-0.5 rounded-lg"
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
