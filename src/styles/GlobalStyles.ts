import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button {
        border: 0;
        outline: 0;
        font-family: 'Space Mono', sans-serif;
    }
`;