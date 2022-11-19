import React from "react";
import MainSectionBox from "./MainSectionBox";
import Wrapper from "./MainSection.styled";
import { ReactComponent as IconSnappy } from "../../assets/images/icon-snappy-process.svg";
import { ReactComponent as IconAfford } from "../../assets/images/icon-affordable-prices.svg";
import { ReactComponent as IconPeople } from "../../assets/images/icon-people-first.svg";

const MainSection = () => {
  return (
    <Wrapper>
      <div className="divider"></div>
      <h2 className="main-section__title">We’re different</h2>
      <div className="main-section__box-container">
        <MainSectionBox
          icon={<IconSnappy className="box__icon" />}
          title="snappy process"
          text={`Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.`}
        />
        <MainSectionBox
          icon={<IconAfford className="box__icon" />}
          title="affordable prices"
          text={`We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible.`}
        />
        <MainSectionBox
          icon={<IconPeople className="box__icon" />}
          title="people first"
          text={`Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it.`}
        />
      </div>
    </Wrapper>
  );
};

export default MainSection;
