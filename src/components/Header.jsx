import React from "react";
import logo from "../img/logo.png";
import themeToggler from "../img/themeToggler.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.headerLogo} src={logo} alt="" />
      <a href="#">
        <img className={style.themeToggler} src={themeToggler} alt="" />
      </a>
    </header>
  );
};

export default Header;
