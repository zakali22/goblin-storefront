import styled from "styled-components"
import {Container, Wrapper} from "../index"

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
        align-items: center;

        @media(max-width: 767px){
            align-items: flex-start
        }

        .cart-icon {
            width: 80px;

            @media(max-width: 767px){
                width: 50px;
            }
        }
    }

    ${Wrapper}{
        &:first-of-type {
            margin-right: auto;

            @media(min-width: 530px) and (max-width: 767px){
                max-width: 70%;
            }
        }
    }
`;


export default Header