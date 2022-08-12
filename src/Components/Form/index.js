import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 23rem;

  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-bottom: 4rem;

  h3 {
    color: #f8f9fa;
    font-size: 18px;
    font-weight: 700;
    margin-top: 42px;
  }

  p {
    color: #868e96;
    font-size: 10px;
    font-weight: 400;
    margin: 22px;
  }

  label {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    color: #f8f9fa;
    font-size: 9px;
    font-weight: 400;
    margin: 15px 0 15px 0;
  }

  input,
  select {
    width: 90%;
    height: 3rem;
    background-color: #343b41;
    border: 1.3px solid #343b41;
    border-radius: 4px;
    padding: 10px;

    color: #868e96;
    font-size: 12px;
  }

  span {
    color: #e83f5b;
    font-size: 10px;
    font-weight: 400;
    text-align: start;
    width: 90%;
  }
`;

export default Form;
