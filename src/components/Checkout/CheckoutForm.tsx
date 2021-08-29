import React, {useState} from "react"
import {Wrapper, Form} from "../../assets/styles/index"

type CheckoutFormProps = {
    title?: string
}

type CheckoutFormFields = {
    card_name: {
        value: string,
        err: string
    },
    card_number: {
        value: string,
        err: string
    },
    expire_date: {
        value: string,
        err: string
    },
    cvv: {
        value: string,
        err: string
    }
}

const CheckoutForm = ({title}: CheckoutFormProps) => {
    const initialFormValues = {
        card_name: {
            value: '',
            err: ''
        },
        card_number: {
            value: '',
            err: ''
        },
        expire_date: {
            value: '',
            err: ''
        },
        cvv: {
            value: '',
            err: ''
        }
    }

    const [checkoutForm, setCheckoutForm] = useState<CheckoutFormFields>(initialFormValues)

    const handleInput = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLInputElement
        setCheckoutForm((inputValues) => ({
            ...inputValues,
            [target.name]: {
                err: '',
                value: target.value
            }
        }))
    }

    const handleFormSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault()

        handleFormValidation()
    }

    const handleFormValidation = () => {
        for(let formField in checkoutForm){
            const {value} = checkoutForm[formField as keyof CheckoutFormFields]
            if(!value.length) {
                setCheckoutForm((inputValues) => ({
                    ...inputValues,
                    [formField]: {
                        value,
                        err: `${formField.split('_').join(' ')} must not be empty`
                    }
                }))
            }
        }
    }

    return (
        <Wrapper margin="20px 0">
            {title && <p>{title}</p>}
            <Form onSubmit={handleFormSubmit}>
                <Wrapper className="nes-field">
                    <label htmlFor="card_name">Cardholder's Name:</label>
                    <input type="text" id="card_name" name="card_name" className="nes-input" placeholder="John Smith" value={checkoutForm.card_name.value} onChange={handleInput} />
                    <p className="nes-text is-error">{checkoutForm.card_name.err}</p>
                </Wrapper>
                <Wrapper className="nes-field">
                    <label htmlFor="card_number">Card Number:</label>
                    <input type="number" id="card_number" name="card_number" className="nes-input" placeholder="0000 0000 0000 0000" value={checkoutForm.card_number.value} onChange={handleInput}/>
                    <p className="nes-text is-error">{checkoutForm.card_number.err}</p>
                </Wrapper>
                <Wrapper className="nes-field">
                    <label htmlFor="expire_date">Expiration Date:</label>
                    <input type="date" id="expire_date" name="expire_date" className="nes-input" value={checkoutForm.expire_date.value} onChange={handleInput}/>
                    <p className="nes-text is-error">{checkoutForm.expire_date.err}</p>
                </Wrapper>
                <Wrapper className="nes-field">
                    <label htmlFor="cvv">CVV:</label>
                    <input type="number" id="cvv" name="cvv" className="nes-input" placeholder="000" maxLength={3} value={checkoutForm.cvv.value} onChange={e => e.target.value.length <= 3 ? handleInput(e) : null}/>
                    <p className="nes-text is-error">{checkoutForm.cvv.err}</p>
                </Wrapper>
                <button type="submit" className="nes-btn is-primary" onClick={handleFormSubmit}>Place order</button>
            </Form>
        </Wrapper>
    )
}

export default CheckoutForm