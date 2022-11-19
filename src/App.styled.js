import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: var(--very-light-gray);
  & h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-body);
  }
  & ul {
    list-style: none;
  }
  & a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--dark-grayish-violet);
    font-family: var(--font-heading);
  }

  & .divider {
    display: block;
    width: 20rem;
    height: 1px;
    margin-bottom: 6rem;
    margin-top: 3rem;
  }

  & .btn {
    background: none;
    border: none;
    font-family: var(--font-heading);
    font-size: inherit;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--dark-violet);
  }

  & .links-btn {
    padding: 0.8rem 2.5rem;
    border: 3px solid var(--dark-violet);
    transition: all 0.2s ease-out;
    &:hover,
    &:focus {
      outline: none;
      color: var(--very-light-gray);
      background-color: var(--dark-violet);
      transform: scale(1.06) translateY(-2px);
      box-shadow: 0 0 9px rgba(0, 0, 0, 0.5);
    }
    &:active {
      transform: scale(0.97) translateY(3px);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
    &.white {
      color: var(--very-light-gray);
      border-color: var(--very-light-gray);
      &:hover {
        background-color: var(--very-light-gray);
        color: var(--dark-violet);
      }
    }
  }
`;

export default AppWrapper;
