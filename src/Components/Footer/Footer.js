import React from "react";
import Wrapper from "./Footer.styled";

import logo from "../../assets/images/logo.svg";
import { ReactComponent as IconFacebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../../assets/images/icon-instagram.svg";
import bg from "../../assets/images/bg-pattern-footer-desktop.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__header">
        <img src={logo} alt="logo" />
        <div className="social-icons">
          <IconFacebook className="footer__icon" />
          <IconTwitter className="footer__icon" />
          <IconPinterest className="footer__icon" />
          <IconInstagram className="footer__icon" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer__nav">
        <ul className="footer__list">
          <h5 className="list-title">Our company</h5>
          <li>
            <a href="/">How we work</a>
          </li>
          <li>
            <a href="/">Why Insure?</a>
          </li>
          <li>
            <a href="/">View plans</a>
          </li>
          <li>
            <a href="/">Reviews</a>
          </li>
        </ul>

        <ul className="footer__list">
          <h5 className="list-title">Help me</h5>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Terms of use</a>
          </li>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Cookies</a>
          </li>
        </ul>

        <ul className="footer__list">
          <h5 className="list-title">Contact</h5>
          <li>
            <a href="/">Sales</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Live chat</a>
          </li>
        </ul>

        <ul className="footer__list">
          <h5 className="list-title">Others</h5>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Licenses</a>
          </li>
        </ul>
      </div>

      <img src={bg} alt="background" className="bg" />
    </Wrapper>
  );
};

export default Footer;
