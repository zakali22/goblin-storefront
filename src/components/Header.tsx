import {Container, Logo, Wrapper} from "../assets/styles/index"
import Nav from "../assets/styles/components/Nav"
import { ReactComponent as CartIcon} from "../../public/images/cart.svg"
import { useAppState } from "../utils/useAppState"

const Header = () => {
    const {state: {cart}} = useAppState()

    return (
        <Nav>
            <Container>
                <Wrapper>
                    <Logo>Global Store</Logo>
                    <h4>Everything for your Typescript adventure</h4>
                </Wrapper>
                <Wrapper className="cart-icon-wrapper">
                    <CartIcon className="cart-icon" />
                    <Wrapper className="nes-badge cart-icon-total"><span className="is-error">{cart.length}</span></Wrapper>
                </Wrapper>
            </Container>
        </Nav>
    )
}


export default Header