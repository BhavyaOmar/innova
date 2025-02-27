import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex w-full justify-between items-center px-10 py-2 fixed top-0 left-0">
      <div className="justify-center">
        <Link to="/" className="logo">
          <h1 className="text-xl">NegiGrow</h1>
        </Link>
      </div>

      <div>
        <ul className="flex gap-10">
          <Link to="/dashboard" className="navLink">
            <li>Dashboard</li>
          </Link>
          <Link to="/discover" className="navLink">
            <li>Discover</li>
          </Link>
        </ul>
      </div>

      <div className="w-[30%]">
        <SearchBar />
      </div>

      <div className="flex gap-8">
        <Button text="Logout" />
      </div>
    </div>
  );
};

export default Navbar;
