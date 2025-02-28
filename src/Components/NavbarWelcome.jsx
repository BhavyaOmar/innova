import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

function NavbarWelcome() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` flex w-full justify-between items-center px-10 py-3  fixed top-0 left-0 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "navbar shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="justify-center">
        <NavLink to="/">
          <h1 className="text-[30px] font-bold ">Finnova</h1>
        </NavLink>
      </div>
      <div>
        <ul className="flex items-center gap-4 md:gap-10">
          <Link to="/dashboard" className="navLink text-base md:text-lg">
            <li>Dashboard</li>
          </Link>
        </ul>
      </div>

      <div className="w-[50vw] max-w-[500px] hidden sm:block">
        <SearchBar />
      </div>

      <div className="flex gap-8"></div>
    </div>
  );
}

export default NavbarWelcome;
