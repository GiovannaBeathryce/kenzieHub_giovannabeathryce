import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  height: 4.5rem;
  /* padding: 1rem; */
  margin: 1.75rem 0 2rem 0;
  text-align: center;

  @media screen and (min-width: 750px) {
    justify-content: space-around;
  }

  h1 {
    color: #ff577f;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }

  button {
    width: 4rem;
    height: 2.5rem;

    color: #f8f9fa;
    background-color: #212529;
    border-radius: 4px;
    border: none;
    margin-left: 4rem;

    &:hover {
      background-color: #343b41;
    }
  }
`;
