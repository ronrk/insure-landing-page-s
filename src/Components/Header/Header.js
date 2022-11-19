import React from "react";
import Wrapper from "./Header.styled";

import logo from "../../assets/images/logo.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";

const Header = () => {
  let showMenu = true;
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        <button className="btn btn-menu">
          <img src={showMenu ? iconClose : iconHamburger} alt="" />
        </button>
        <ul className="header__list">
          <li>
            <a href="/">How we work</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
          <li>
            <button className="btn links-btn">View plans</button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
