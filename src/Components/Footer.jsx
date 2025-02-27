import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-4 bg2 fixed bottom-0">
      <div className="my-6">
        <div>
          <a href="/"><h1 className="text-2xl my-4">NegiGrow</h1></a>
        </div>

        <div className="socials my-2">
          <ul className="flex gap-6 text-2xl">
            <a href="/"><li><FaXTwitter /></li></a>
            <a href="/"><li><FaLinkedin /></li></a>
            <a href="/"><li><FaInstagram /></li></a>
            <a href="/"><li><FaRedditAlien /></li></a>
            <a href="/"><li><FaTelegramPlane /></li></a>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <p>&copy; NegiGrow 2025 | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
