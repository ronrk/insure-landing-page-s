import React from "react";
import Wrapper from "./FindOut.styled";
import bg from "../../assets/images/bg-pattern-how-we-work-desktop.svg";

const FindOut = () => {
  return (
    <Wrapper>
      <h2>Find out more about how we work</h2>
      <button className="btn links-btn white find-btn">How we work</button>
      <img src={bg} alt="background" className="bg" />
    </Wrapper>
  );
};

export default FindOut;
