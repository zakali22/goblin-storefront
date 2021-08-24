import {Wrapper} from "../../assets/styles/index"
import CartItem from "./CartItem"
import {Product} from "../../state/appStateReducer"

type CartListingProps = {
    cart: Product[]
}

const CartListing = ({cart}: CartListingProps) => (
    <Wrapper>
        {cart.map(cartItem => <CartItem cartItem={cartItem} />)}
    </Wrapper>
)

export default CartListing