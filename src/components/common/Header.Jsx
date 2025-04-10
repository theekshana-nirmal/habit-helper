/*

Header Section (Header.jsx - Common Component)

Logo/Website Name Text: [Website Name] (e.g., Scroll Less)
Navigation Links Text:
Home
Ideas
About

*/

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full bg-white p-4">
      <div className="container max-w-7xl flex justify-between items-center">
        <div>Habit Helper</div>
        <div>
          <nav className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/ideas">Ideas</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
