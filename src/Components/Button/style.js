import styled from "styled-components";

export const ButtonForm = styled.button`
  text-align: center;
  height: 3rem;
  padding: 0.5rem;
  margin-top: 1.75rem;
  border-radius: 4px;
  width: 90%;
  color: rgba(255, 255, 255, 1);
  background-color: #ff577f;
  border: 1.2px solid #ff577f;

  &:hover {
    background-color: rgba(255, 66, 127, 1);
  }
`;

export const ButtonFormDisabled = styled.button`
  text-align: center;
  height: 3rem;
  padding: 1rem;
  margin-top: 1.75rem;
  border-radius: 4px;
  width: 90%;
  color: #ffffff;
  background-color: #59323f;
  border: 1.2182px solid #59323f;
  margin-bottom: 1rem;
`;

export const ButtonCadastrar = styled.button`
  text-align: center;
  height: 3rem;
  padding: 0.5rem;
  /* margin-top: 1.75rem; */
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
`;
