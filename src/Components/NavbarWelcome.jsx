import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

function NavbarWelcome() {
  return (
    <div className="navbar-container">
      <ul>
        <li className="logo">TACTICS</li>
        <li>
          <SearchBar />
        </li>
        <li>
          <Button text="Login/Register" />
        </li>
      </ul>
    </div>
  );
}

export default NavbarWelcome;
