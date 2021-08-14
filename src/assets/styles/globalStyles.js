import styled, {createGlobalStyle} from "styled-components"
import "nes.css/css/nes.min.css";

const globalStyles = createGlobalStyle`
    @font-face {
        font-family: 'PressStart2P-Regular';
        src: url('../fonts/PressStart2P-Regular.ttf') format('truetype')
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
    }
      
    html {
        box-sizing: border-box;
    }      

    h1 {
        font-size: 32px;

        @media(max-width: 767px){
            font-size: 29px;
        }
    }

    h2 {
        @media(max-width: 767px){
            font-size: 20px;
        }
    }

    h3 {
        @media(max-width: 767px){
            font-size: 16px;
        }
    }
`

export default globalStyles