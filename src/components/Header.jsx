import React from "react";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img src="src\img\Group 2081.png" alt="" />
      <button>Dark/Light</button>
    </header>
  );
};

export default Header;
