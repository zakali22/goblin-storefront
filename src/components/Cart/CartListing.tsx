import {Wrapper} from "../../assets/styles/index"
import CartItem from "./CartItem"
import {Product} from "../../state/appStateReducer"

type CartListingProps = {
    cart: Product[]
}

const CartListing = ({cart}: CartListingProps) => (
    <Wrapper>
        {cart.map((cartItem, idx) => <CartItem cartItem={cartItem} key={idx} />)}
    </Wrapper>
)

export default CartListing