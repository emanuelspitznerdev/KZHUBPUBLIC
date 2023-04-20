import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41; 
        --color-grey-1: #868E96; 
        --color-grey-0: #F8F9FA;

        font-size: 60%;
    }

    @media(min-width: 700px) {
        :root {
            font-size: 62.5%
        }
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
`