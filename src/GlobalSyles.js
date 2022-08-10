import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: 'Inter', sans-serif;
        background-color: #121214;
    }

    button{
        cursor: pointer;
    }
`;
