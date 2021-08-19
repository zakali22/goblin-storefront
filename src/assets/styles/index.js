import styled, {css} from "styled-components"

const calcGrid = (columnsLength) => {
    switch(columnsLength){
        case 4:
            return '25%';
        case 3: 
            return '33.33%';
        case 2: 
            return '50%';
        default: 
            return '100%'
    }
}

// Layout
export const Container = styled.div`
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 16px;

    &.nes-container {
        padding: ${props => props.padding ? props.padding : '20px'};
    }
`;

export const Content = styled.section`
    padding-top: calc(124px + 20px);
    padding-left: 16px;
    padding-right: 16px;

    @media(max-width: 767px){
        padding-top: calc(143px + 20px);
    }

    @media(max-width: 400px){
        padding-top: calc(161px + 20px);
    }
`;

const GridColumns = css`
    flex: 1 0 ${props => props.gridColumnWidth ? props.gridColumnWidth : calcGrid(props.columns)}px;
    width: ${props => props.gridColumnWidth}px;
    max-width: ${props => props.gridColumnWidth ? props.gridColumnWidth : calcGrid(props.columns)}px;
`

export const GridListing = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${props => props.padding}px;

    & > * {
        ${GridColumns}
    }
`

export const Wrapper = styled.div`
    position: relative;
    margin: ${props => props.margin};
    padding: ${props => props.padding};

    &.cart-icon-wrapper {
        .cart-icon-total {
            position: absolute;
            top: 0;
            right: -20px;
            min-width: 15px;
            min-height: 15px;
            width: auto;
            height: auto;

            span {
                font-size: 12px;
                position: relative;
            }
        }
    }
`

export const WrapperFlexed = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    margin: ${props => props.margin};
    padding: ${props => props.padding};

    @media(max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`

// Elements
export const Logo = styled.h1`
    color: #4aa52e;

    @media(max-width: 767px){
        font-size: 25px;
    }
`

export const ImageWrapper = styled.div`
    width: ${props => props.width}px;

    & > img {
        width: 100%;
        height: auto;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    button.nes-btn {
        align-self: flex-start
    }

    & > .nes-field:not(:last-of-type) {
        margin-bottom: 20px;
    }
`