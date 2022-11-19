import React from "react";
import Wrapper from "./MainSectionBox.styled";

const MainSectionBox = ({ icon, title, text }) => {
  return (
    <Wrapper>
      {icon}
      <h3 className="box__title">{title}</h3>
      <p className="box__content">{text}</p>
    </Wrapper>
  );
};

export default MainSectionBox;
