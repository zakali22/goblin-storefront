import WrapperContainer from "../WrapperContainer"
import CheckoutSummary from "./CheckoutSummary"
import CheckoutForm from "./CheckoutForm"

const Checkout = () => (
    <WrapperContainer title="Checkout" padding="20px 40px">
        <CheckoutSummary />
        <CheckoutForm title="Enter your payment credentials" />
    </WrapperContainer>
)

export default Checkout