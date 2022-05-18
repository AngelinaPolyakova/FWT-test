import React from "react";
import logo from "../../images/icons/logo.png";
import themeToggler from "../../images/icons/themeToggler.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="headerLogo" src={logo} alt="" />
      <a className="themeTogglerButton" href="#">
        <img className="themeTogglerLogo" src={themeToggler} alt="" />
      </a>
    </header>
  );
};

export default Header;
