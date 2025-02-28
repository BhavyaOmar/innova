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
    <div className="navbar flex w-full justify-between items-center px-10 py-2 fixed top-0 left-0 z-[1001]">
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


      <div>
        <ul className="flex gap-10">
          <Link to="/dashboard" className="navLink">
            <li>Dashboard</li>
          </Link>
          <a href="/discover" className="navLink">
            <li>Discover</li>
          </a>
        </ul>
      </div>

      <div className="w-[30%]">

        <SearchBar />
      </div>

      <div className="flex gap-8"></div>
    </div>
    </div>
  );
}

export default NavbarWelcome;
