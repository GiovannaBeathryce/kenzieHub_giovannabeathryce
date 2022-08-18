import styled from "styled-components";

export const HeaderConteiner = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 7rem;
  max-height: 8rem;
  padding: 2rem;
  border: 1px solid #212529;

  @media screen and (min-width: 750px) {
    flex-direction: row;
    align-items: center;
  }

  h2 {
    color: #f8f9fa;
    font-size: 18px;
    font-weight: 700;
    margin: 0.5rem;
  }

  p {
    color: #868e96;
    font-size: 12px;
    font-weight: 400;
    margin: 0.5rem;
  }
`;
