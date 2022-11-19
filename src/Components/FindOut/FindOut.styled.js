import styled from "styled-components";

const FintOutWrapper = styled.div`
  background-color: var(--dark-violet);
  margin: var(--main-padding);
  padding: 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 4rem;
    margin: 3rem 6rem;
  }
  & h2 {
    width: 22ch;
    font-size: 5rem;
    color: var(--very-light-gray);
    font-family: var(--font-body);
    font-weight: 400;
    z-index: 20;
    @media screen and (max-width: 800px) {
      font-size: 3.5rem;
    }
  }
  & .find-btn {
    font-size: 1.9rem;
    border-width: 1px;
    z-index: 20;
    @media screen and (max-width: 800px) {
      font-size: 1.4rem;
    }
  }

  & .bg {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
  }
`;
export default FintOutWrapper;
