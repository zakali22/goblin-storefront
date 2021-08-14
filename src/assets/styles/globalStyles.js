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
`

export default globalStyles