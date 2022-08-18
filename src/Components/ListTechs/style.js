import styled from "styled-components";

export const ListTechs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin-top: 1rem;

  background-color: #212529;
  border-radius: 4px;

  div {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    margin: 0.5rem 0 0.5rem 0;

    background-color: #121214;
    border-radius: 4px;
    cursor: pointer;

    &:focus {
      background-color: #343b41;
    }

    &:hover {
      background-color: #343b41;
    }

    h4 {
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
    }

    h5 {
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;

      width: 100%;
      text-align: center;
    }

    p {
      color: #868e96;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;

      button {
        margin-left: 1rem;
        border: none;
        background-color: #121214;
        align-items: center;
        border-radius: 4px;
        width: 20px;
        height: 20px;

        &:hover {
          background-color: #343b41;
        }

        svg {
          width: 12px;
          height: 12px;
          color: #ffffff;
          margin-top: 2px;
        }
      }
    }
  }
`;
