import {WrapperFlexed, ImageWrapper} from "../../assets/styles/index"
import {removeProductCart} from "../../state/appStateActions"
import { Product } from "../../state/appStateReducer"
import { useAppState } from "../../utils/useAppState"

type CartItemProps = {
    cartItem: Product
}

const CartItem = ({cartItem: {_id, price, image, description}}: CartItemProps) => {
    const {dispatch} = useAppState()

    return (
        <WrapperFlexed margin="0 0 20px 0">
            <ImageWrapper width="64">
                <img src={image} alt="Product"/>
            </ImageWrapper>
            <p>{description}</p>
            <p>{price} Zm</p>
            <button type="button" className="nes-btn is-error" onClick={() => dispatch(removeProductCart(_id))}>Remove</button>
        </WrapperFlexed>
    )
}

export default CartItem