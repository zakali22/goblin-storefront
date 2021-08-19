import WrapperContainer from "../WrapperContainer"

const CheckoutSummary = () => (
    <WrapperContainer rounded>
        <p>You are going to buy:</p>
        <div className="lists">
            <ul className="nes-list is-circle">
                <li>Good morning.</li>
                <li>Thou hast had a good night's sleep, I hope.</li>
                <li>Thou hast had a good afternoon</li>
                <li>Good night.</li>
            </ul>
        </div>
    </WrapperContainer>
)

export default CheckoutSummary