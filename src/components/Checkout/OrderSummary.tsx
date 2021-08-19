import WrapperContainer from "../WrapperContainer"

const OrderSummary = () => (
    <WrapperContainer title="Order Summary" padding="20px 40px">
        <WrapperContainer rounded>
            <div className="lists">
                <ul className="nes-list is-circle">
                    <li>Good morning.</li>
                    <li>Thou hast had a good night's sleep, I hope.</li>
                    <li>Thou hast had a good afternoon</li>
                </ul>
            </div>
        </WrapperContainer>
        <button type="button" className="nes-btn is-primary">Back to the store</button>
    </WrapperContainer>
)

export default OrderSummary