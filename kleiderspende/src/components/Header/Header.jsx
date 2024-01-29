import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flexContainer header flexAlignment ${
        isMenuOpen ? "menuOpen" : ""
      }`}
    >
      <div className="Logo flexContainer">
        <img src="/Logo.png" alt="Logo" className="logoImg" />
        <div className="headerText">
          <h1>Kleiderspenden</h1>
          <p>gutes tun und Spenden</p>
        </div>
      </div>
      <div className="Navbar">
        <h1 className="text">We are Clothing Donation</h1>
        <ul className="flexContainer nav">
          <li>
            <a href="/home" className="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="navlink">
              {" "}
              About
            </a>
          </li>
          <li>
            <a href="/spenden" className="navlink">
              Spenden
            </a>
          </li>
          <li>
            <a href="/contact" className="navlink">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
