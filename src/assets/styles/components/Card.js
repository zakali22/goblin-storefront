import styled from "styled-components"
import {ImageWrapper} from "../index"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 10px 15px !important;
    margin: 12.5px !important;

    ${ImageWrapper}{
        margin-bottom: 10px;
    }
`