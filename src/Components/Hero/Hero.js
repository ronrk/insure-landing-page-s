import React from "react";
import Wrapper from "./Hero.styled";

import heroImg from "../../assets/images/image-intro-desktop.jpg";
import bgLeft from "../../assets/images/bg-pattern-intro-left-desktop.svg";
import bgRight from "../../assets/images/bg-pattern-intro-right-desktop.svg";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero__content">
        <div className="divider"></div>
        <h1 className="hero-title">Humanizing your insurance.</h1>
        <p className="hero-text">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="hero-btn btn links-btn white">View plans</button>
      </div>
      <div className="hero__img-container">
        <img src={heroImg} alt="hero" className="hero__img" />
      </div>
      <img src={bgLeft} alt="background" className="bg-left" />
      <img src={bgRight} alt="bacground" className="bg-right" />
    </Wrapper>
  );
};

export default Hero;
