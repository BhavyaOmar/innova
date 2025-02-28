import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FinanceContext } from "../Contexts/FInanceProvider";
import "../App.css";
import names from "../jsonData/amc_names.json";
import NavbarWelcome from "./NavbarWelcome";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);
  const { setName } = useContext(FinanceContext);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setFilteredNames([]);
      }
    };

    if (filteredNames.length > 0) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filteredNames]);

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

  const handleSelectAMC = (amc) => {
    setName(amc);
    setQuery(amc);
    setFilteredNames([]);
    navigate(`/amc/${encodeURIComponent(amc)}`);
  };

  return (
    <>
      {/* <NavbarWelcome /> */}
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          className="searchBar border w-full px-2 py-0.5 rounded-lg"
          onChange={updateInput}
        />

        {filteredNames.length > 0 && (
          <ul
            ref={modalRef}
            className="absolute w-[150%] h-fit max-h-[600%] rounded-b-xl modal overflow-y-auto bg-white shadow-lg"
          >
            {filteredNames.map((name, index) => (
              <li
                key={index}
                onClick={() => handleSelectAMC(name)}
                className="listItem px-4 my-1 cursor-pointer hover:bg-gray-200"
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
