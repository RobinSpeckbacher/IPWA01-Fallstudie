import React, { useState } from "react";
import "./header.css";

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  return (
    <header className="mobileNavHeader">
      <img
        src="/Logo.png"
        alt=""
        className={`logoImg ${isActive ? "none" : ""}`}
      />
      <nav className={`mobileNav ${isActive ? "active" : ""}`}>
        <a href="#" className="nav-branding"></a>
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/home" className="nav-link" onClick={closeNav}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" onClick={closeNav}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/spenden" className="nav-link" onClick={closeNav}>
              Spenden
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" onClick={closeNav}>
              Kontakt
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
