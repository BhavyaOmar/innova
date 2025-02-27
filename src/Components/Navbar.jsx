import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="navbar flex w-full justify-between items-center px-10 py-2 fixed top-0 left-0">
      <div className="justify-center">
        <a href="/" className="logo">
          <h1 className="text-xl">NegiGrow</h1>
        </a>
=======
    <div className='navbar flex w-full justify-between items-center px-10 py-2 fixed top-0 left-0'>
      <div className='justify-center'>
        <a href="/" className='logo'><h1 className='text-xl'>Finnova</h1></a>
>>>>>>> f6d1ff3a859039fb7a61e233dfde1681a908709f
      </div>

      <div>
        <ul className="flex gap-10">
          <a href="/" className="navLink">
            <li>Explore</li>
          </a>
          <a href="/" className="navLink">
            <li>Discover</li>
          </a>
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
