import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 48rem;
  /* max-height: 26rem; */
  padding: 1rem 1.5rem;
  box-sizing: border-box;

  @media screen and (min-width: 700px) {
    width: 80%;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h3 {
      color: #f8f9fa;
      font-size: 18px;
      font-weight: 700;
      margin: 0.5rem;
    }

    button {
      width: 2rem;
      height: 2rem;
      background-color: #212529;
      border-radius: 4px;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
      margin-top: 1px;

      &:hover {
        background-color: #343b41;
      }
    }
  }
`;
