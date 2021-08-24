import { useEffect } from "react"
import { useAppState } from "../../utils/useAppState"
import WrapperContainer from "../WrapperContainer"
import CartListing from "./CartListing"
import CartTotal from "./CartTotal"

const CartSummary = () => {
    const {state: {cart}} = useAppState()

    useEffect(() => {

    }, [cart])

    return (
        <WrapperContainer title="Cart summary" centered>
            <CartListing cart={cart} />
            {/* <CartTotal cartTotal={} /> */}
            <button type="button" className="nes-btn is-primary">Go to checkout</button>
        </WrapperContainer>
    )
}


export default CartSummary