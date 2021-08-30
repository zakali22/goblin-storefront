import WrapperContainer from "../WrapperContainer"
import CheckoutSummary from "./CheckoutSummary"
import CheckoutForm from "./CheckoutForm"
import { useAppState } from "../../utils/useAppState"

const Checkout = () => {
    const {state: {cart}} = useAppState()

    return (
        <WrapperContainer title="Checkout" padding="20px 40px">
            <CheckoutSummary cart={cart} />
            <CheckoutForm title="Enter your payment credentials" />
        </WrapperContainer>
    )
}

export default Checkout