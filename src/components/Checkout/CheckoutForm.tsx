import {Wrapper, Form} from "../../assets/styles/index"

type CheckoutFormProps = {
    title?: string
}

const CheckoutForm = ({title}: CheckoutFormProps) => (
    <Wrapper margin="20px 0">
        {title && <p>{title}</p>}
        <Form>
            <Wrapper className="nes-field">
                <label htmlFor="card_name">Cardholder's Name:</label>
                <input type="text" id="card_name" className="nes-input" placeholder="John Smith" />
            </Wrapper>
            <Wrapper className="nes-field">
                <label htmlFor="card_number">Card Number:</label>
                <input type="number" id="card_number" className="nes-input" placeholder="0000 0000 0000 0000"/>
            </Wrapper>
            <Wrapper className="nes-field">
                <label htmlFor="expiration">Expiration Date:</label>
                <input type="date" id="expiration" className="nes-input"/>
            </Wrapper>
            <Wrapper className="nes-field">
                <label htmlFor="cvv">CVV:</label>
                <input type="number" id="cvv" className="nes-input" placeholder="000"/>
            </Wrapper>
            <button type="button" className="nes-btn is-primary">Place order</button>
        </Form>
    </Wrapper>
)

export default CheckoutForm