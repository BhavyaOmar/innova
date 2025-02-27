import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

function NavbarWelcome() {
  return (
    <div className="navbar flex w-full justify-between items-center px-10 py-2 fixed top-0 left-0">
      <div className="justify-center">
        <NavLink to="/">
          <h1 className="text-xl">Finnova</h1>
        </NavLink>
      </div>

      <div>
        <ul className="flex gap-10">
          <Link to="/" className="navLink">
            <li>Explore</li>
          </Link>
          <a href="/discover" className="navLink">
            <li>Discover</li>
          </a>
        </ul>
      </div>

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
