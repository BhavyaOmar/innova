import { useState, useRef, useEffect } from "react";
import "../App.css";
import names from "../jsonData/amc_names.json";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // setQuery("");
        setFilteredNames([]);
      }
    };

    if (query) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [query]);

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
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          className="searchBar border w-full px-2 py-0.5 rounded-lg"
          onChange={updateInput}
        />
      </div>

        {query.trim() && (
        <ul ref={modalRef} className="absolute w-[29%] h-fit max-h-[500%] rounded-b-xl modal overflow-y-scroll">
          {filteredNames.map((name, index) => (
            <li key={index} onClick={() => setQuery(name)} className="listItem px-4 my-1">
              {name}
            </li>
          ))}
        </ul>
        )}
    </>
  );
};

export default SearchBar;
