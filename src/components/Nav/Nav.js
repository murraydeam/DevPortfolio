import "./nav.css";
import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="name">Deandre Murray</div>
      <div className="nav-items">
        <div className="nav-item">
          <a href="#work">Work</a>
        </div>
        <div className="nav-item">
          <a href="#About">About</a>
        </div>
        <div className="nav-item">
          <a href="#resume">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
