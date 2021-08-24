import {WrapperFlexed, ImageWrapper} from "../../assets/styles/index"

const CartItem = () => (
    <WrapperFlexed margin="0 0 20px 0">
        <ImageWrapper width="64">
            <img src={'/images/broad_sword.png'} alt="Product"/>
        </ImageWrapper>
        <p>Rusty Sword</p>
        <p>50 Zm</p>
        <button type="button" className="nes-btn is-error">Remove</button>
    </WrapperFlexed>
)

export default CartItem