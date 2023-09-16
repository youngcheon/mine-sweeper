import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    ${reset}

    @font-face {
        font-family: "DungGeunMo";
        src: url('../public/fonts/DungGeunMo.woff');
    }

    * {
        margin : 0;
        padding : 0;
        box-sizing: border-box;
        cursor: default;
    }

    li{
        list-style: none;
    }

    html, body, #root {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #2b2b2b;
    }

    * {
        box-sizing: border-box;
    }

    a, a:hover, a:active, a:visited {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`;
export default GlobalStyle;
