import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--main-padding);
  & .header__nav {
    & .btn-menu {
      display: none;
      border: none;
      background: none;
      transition: all 0.2s;

      &:hover,
      &:focus {
        outline: none;
        transform: scale(1.1);
      }
      @media screen and (max-width: 800px) {
        display: flex;
      }
    }

    & .header__list {
      display: flex;
      align-items: center;
      gap: 5rem;

      @media screen and (max-width: 1200px) {
        gap: 3rem;
      }
      @media screen and (max-width: 900px) {
        gap: 1rem;
      }

      @media screen and (max-width: 800px) {
        display: none;
      }

      & li {
        /* padding: 0 3rem; */
        font-size: 1.7rem;
        & a {
          font-size: 1.8rem;
          transition: all 0.2s;

          &:hover {
            color: var(--dark-violet);
          }
        }
      }
    }

    & .header__list {
    }
  }
`;
export default HeaderWrapper;
