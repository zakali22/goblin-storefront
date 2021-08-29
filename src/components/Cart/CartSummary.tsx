import { useEffect, useState } from "react"
import { useAppState } from "../../utils/useAppState"
import {Product} from "../../state/appStateReducer"
import WrapperContainer from "../WrapperContainer"
import CartListing from "./CartListing"
import CartTotal from "./CartTotal"

const CartSummary = () => {
    const {state: {cart}} = useAppState()
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const cartTotal = (cart as Array<Product[] | []>).reduce((total: any, amount: any) => {
            return total + Number(amount.price)
        }, 0)

        setCartTotal(cartTotal)
    }, [cart])

    return (
        <WrapperContainer title="Cart summary" centered>
            <CartListing cart={cart} />
            <CartTotal cartTotal={cartTotal} />
            <button type="button" className="nes-btn is-primary">Go to checkout</button>
        </WrapperContainer>
    )
}


export default CartSummary