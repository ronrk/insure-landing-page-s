import React from "react";
import Wrapper from "./MobileNav.styled";

const MobileNav = () => {
  return (
    <Wrapper>
      <ul className="mobileNav__list">
        <li>
          <a href="/">how we work</a>
        </li>
        <li>
          <a href="/">blog</a>
        </li>
        <li>
          <a href="/">account</a>
        </li>
        <li>
          <button className="btn links-btn">View plans</button>
        </li>
      </ul>
    </Wrapper>
  );
};

export default MobileNav;
