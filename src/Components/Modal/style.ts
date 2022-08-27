import styled from "styled-components";

export const ModalAdd = styled.div`
  /* width: 100%;
  height: 21rem; */

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;

  background-color: rgba(18, 18, 20, 0.7);

  .headerModal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-direction: row;
    width: 100%;
    height: 3rem;
    padding: 1rem;
    background-color: #343b41;
    border-radius: 4px 4px 0px 0px;

    h5 {
      color: #f8f9fa;
      font-size: 0.75rem;
      font-weight: 700;
    }

    button {
      width: 20px;
      height: 20px;
      margin: 0;
      background-color: transparent;
      border: none;
      font-weight: 600;
      font-size: 1rem;
      color: #868e96;
    }
    form {
      border-radius: none;
    }
  }

  button {
    margin-bottom: 1rem;
  }
`;
