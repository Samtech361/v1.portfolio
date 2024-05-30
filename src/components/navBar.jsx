import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import logo from "./logo.svg";
// import resumePDF from "./resume.pdf";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src="" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <ul>
          <li className="navlink-items">
            <Link to={"/about"}>01. About</Link>
          </li>
          <li>
            <Link to={"/experience"}>02. Experience</Link>
          </li>
          <li>
            <Link to={"/projects"}>03. Work</Link>
          </li>
          <li>
            <Link to={"/contact"}>04. Contact</Link>
          </li>
        </ul>
      </div>
      <div className="btn-resume">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
