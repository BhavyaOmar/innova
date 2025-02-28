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

      <div className="w-[50vw] max-w-[500px] hidden sm:block">
        <div className="">
          <SearchBar />
        </div>

        <div className="flex gap-8"></div>
      </div>
    </div>
  );
}

export default NavbarWelcome;
