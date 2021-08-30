import WrapperContainer from "../WrapperContainer"
import { Product } from "../../state/appStateReducer"

type CheckoutSummaryProps = {
    cart: Product[]
}

const CheckoutSummary = ({cart}: CheckoutSummaryProps) => (
    <WrapperContainer rounded>
        <p>You are going to buy:</p>
        <div className="lists">
            <ul className="nes-list is-circle">
                {cart.map((cartItem, idx) => <li key={idx}>{cartItem.name}</li>)}
            </ul>
        </div>
    </WrapperContainer>
)

export default CheckoutSummary