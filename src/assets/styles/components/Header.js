import styled from "styled-components"
import {Container} from "../index"

const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    border-bottom: 4px solid #d3d3d3;
    background-color: white;

    ${Container} {
        display: flex;
        justify-content: space-between;
        
        .cart-icon {
            width: 90px;
        }
    }
`;


export default Header