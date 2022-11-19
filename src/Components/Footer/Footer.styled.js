import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: relative;
  background-color: var(--very-light-gray);
  padding: var(--main-padding);
  @media screen and (max-width: 600px) {
    padding: 3rem 6rem;
  }
  & .footer__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    z-index: 20;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    & .social-icons {
      display: flex;
      gap: 2rem;

      & .footer__icon {
        cursor: pointer;
        & path {
          transition: all 0.2s;
        }
        &:hover {
          & path {
            fill: var(--dark-violet);
          }
        }
      }
    }
  }
  & .divider {
    background-color: var(--grayish-blue);
    width: 100%;
    height: 1px;
    margin-bottom: 5rem;
    z-index: 20;
  }
  & .footer__nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10rem;
    z-index: 20;
    @media screen and (max-width: 800px) {
      gap: 5rem;
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    & .footer__list {
      margin-right: 5rem;
      & .list-title {
        font-size: 1.5rem;
        color: var(--dark-grayish-violet);
        font-weight: 400;
        margin-bottom: 1rem;
      }

      & li {
        padding: 0.5rem 0;
        & a {
          font-size: 1.4rem;
          color: var(--very-dark-violet);
          font-weight: 800;
          letter-spacing: 1.3px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  & .bg {
    position: absolute;

    z-index: -1;
    top: 0;
    right: 0;
  }
`;
export default FooterWrapper;
