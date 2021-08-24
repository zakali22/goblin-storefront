import WrapperContainer from "../WrapperContainer"
import CartListing from "./CartListing"
import CartTotal from "./CartTotal"

const CartSummary = () => (
    <WrapperContainer title="Cart summary" centered>
        <CartListing />
        <CartTotal />
        <button type="button" className="nes-btn is-primary">Go to checkout</button>
    </WrapperContainer>
)


export default CartSummary