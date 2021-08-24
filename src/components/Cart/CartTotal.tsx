
type CartTotalProps = {
    cartTotal: number
}

const CartTotal = ({cartTotal}: CartTotalProps) => (
    <p>Total: {cartTotal} Zm</p>
)

export default CartTotal