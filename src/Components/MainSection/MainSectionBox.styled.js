import styled from "styled-components";

const BoxStyled = styled.div`
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  & .box__icon {
    margin-bottom: 3rem;
  }
  & .box__title {
    font-size: 3rem;
    text-transform: capitalize;
    letter-spacing: 1.1px;
    color: var(--dark-violet);
    margin-bottom: 2rem;
  }

  & .box__content {
    font-size: 1.6rem;
    color: var(--dark-grayish-violet);
    font-family: var(--font-body);
    line-height: 1.5;
  }
`;

export default BoxStyled;
