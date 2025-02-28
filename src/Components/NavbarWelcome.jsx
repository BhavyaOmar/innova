import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { NavLink } from "react-router-dom";

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
<<<<<<< HEAD
    <div className="navbar flex w-full justify-between items-center px-10 py-2 fixed top-0 left-0 z-[1001]">
=======
    <div
      className={` flex w-full justify-between items-center px-10 py-3  fixed top-0 left-0 fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "navbar shadow-lg" : "bg-transparent"
      }`}
    >
>>>>>>> upstream/main
      <div className="justify-center">
        <NavLink to="/">
          <h1 className="text-xl">Finnova</h1>
        </NavLink>
      </div>
<<<<<<< HEAD

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

=======
>>>>>>> upstream/main
      <div className="w-[30%]">
        <SearchBar />
      </div>

      <div className="flex gap-8">
        <Button text="SignUp" />
        <Button text="Login" />
      </div>
    </div>
  );
}

export default NavbarWelcome;
