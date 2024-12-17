import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Toggle the dark mode class
  };

  return (
    <div className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
        />
      </div>

      {/* Dark Mode Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleDarkMode}>
        <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
      </button>
    </div>
  );
};

export default Header;
