import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./components.css";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo"></div>
        <div className="navlink">
          <ul>
            <li className="navlink-items">
              <NavLink to={"/about"}>01. About</NavLink>
            </li>
            <li>
              <NavLink to={"/experience"}>02. Experience</NavLink>
            </li>
            <li>
              <NavLink to={"/work"}>03. Work</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>04. Contact</NavLink>
            </li>
          </ul>

          <button className=" ">
            <Link to={""}>Resume</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
