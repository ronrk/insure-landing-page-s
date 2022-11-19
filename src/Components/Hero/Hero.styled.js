import styled from "styled-components";

const HeroWrapper = styled.section`
  background-color: var(--dark-violet);
  padding: var(--main-padding);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  /* justify-content: space-evenly; */
  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 4rem;
  }
  & .bg-left,
  .bg-right {
    position: absolute;
  }

  .bg-right {
    right: 0;
    top: 0;
    width: 20vw;
  }

  & .bg-left {
    left: 0;
    bottom: -19vw;
    width: 12vw;
  }
  & .hero__content {
    padding-right: 5rem;
    @media screen and (max-width: 700px) {
      order: 1;
    }

    & .hero-btn {
      font-size: 1.9rem;
      letter-spacing: 1.3px;
      border-width: 1px;
    }
  }
  & .hero-title {
    font-size: 8rem;
    color: var(--very-light-gray);
    margin-bottom: 2rem;

    @media screen and (max-width: 1300px) {
      font-size: 6rem;
    }
  }
  & .hero-text {
    font-size: 1.8rem;
    color: var(--dark-grayish-violet);
    line-height: 1.5;
    letter-spacing: 1.3px;
    margin-bottom: 5rem;
  }

  & .hero__img-container {
    @media screen and (max-width: 700px) {
      order: 0;
    }
    & .hero__img {
      transform: translateY(12rem);
      border-radius: 3px;
      border: 0.1px solid var(--dark-violet);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      width: 35vw;

      @media screen and (max-width: 900px) {
        transform: translateY(18rem);
      }
      @media screen and (max-width: 700px) {
        width: 100%;
      }
      @media screen and (max-width: 700px) {
        transform: translate(0);
        order: 0;
      }
    }
  }
  & .divider {
    background-color: var(--grayish-blue);
  }
`;
export default HeroWrapper;
