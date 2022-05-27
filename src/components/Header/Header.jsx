import logo from "../../images/icons/logo.png";
import { ReactComponent as ThemeToggler } from "../../images/icons/themeToggler.svg";
import "./Header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <img className="headerLogo" src={logo} alt="" />
      <a className="themeTogglerButton" href="#">
        <ThemeToggler
          fill="peru"
          className="themeTogglerLogo"
          alt=""
          onClick={() => props.themeToggler()}
        />
      </a>
    </header>
  );
};

export default Header;
