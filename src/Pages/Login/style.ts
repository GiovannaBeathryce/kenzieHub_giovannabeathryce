import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .cadastrar {
    text-align: center;
    text-decoration: none;
    height: 3rem;
    padding: 0.75rem;
    border-radius: 4px;
    width: 90%;
    color: rgba(255, 255, 255, 1);
    background-color: #868e96;
    border: 1.2px solid #868e96;
    margin-bottom: 2rem;

    &:hover {
      background-color: #343b41;
      border: 1.2px solid #343b41;
    }
  }

  .containerPassword {
    width: 90%;
    height: 3rem;
    background-color: #343b41;
    border: 1.3px solid #343b41;
    border-radius: 4px;
    color: #868e96;
    font-size: 12px;

    input {
      height: 2.75rem;
    }

    button {
      border: none;
      background-color: transparent;
      background: trasparent;
      color: white;
      width: 30px;
      height: 45px;
      padding-top: 2px;
    }
  }
`;
