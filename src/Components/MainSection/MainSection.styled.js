import styled from "styled-components";

const MainSectionWrapper = styled.section`
  padding: var(--main-padding);
  margin-top: 13rem;

  @media screen and (max-width: 900px) {
    margin-top: 8rem;
  }
  @media screen and (max-width: 800px) {
    margin-top: 5rem;
    text-align: center;
  }
  & .divider {
    background-color: var(--grayish-blue);
  }

  & .main-section__title {
    font-size: 5.5rem;
    font-weight: 400;
    color: var(--very-dark-violet);
    margin-bottom: 8rem;
  }

  & .main-section__box-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6rem;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default MainSectionWrapper;
