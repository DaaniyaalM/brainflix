import React from "react";
import { Link } from "react-router-dom";
import SearchPic from "../../assets/Icons/search.svg";
import LogoPic from "../../assets/Logo/BrainFlix-logo.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__main-icon">
        <Link to="/">
          <img src={LogoPic} alt="Logo" />
        </Link>
      </div>
      <div className="navbar__row">
        <div className="navbar__search-container">
          <div className="navbar__icon"></div>
          <label className="navbar__magnifying-glass">
            <img src={SearchPic} alt="Search" />
          </label>
          <input
            type="search"
            placeholder="Search"
            className="navbar__search"
          />
        </div>
        <Link to="/upload">
          {" "}
          <button className="navbar__upload-desktop">Upload</button>
        </Link>
        <div className="profile-picture"></div>
      </div>
      <Link to="/upload">
        {" "}
        <button className="navbar__upload">Upload</button>
      </Link>
    </div>
  );
}

export default Navbar;
