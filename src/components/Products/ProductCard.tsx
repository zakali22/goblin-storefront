import {Card} from "../../assets/styles/components/Card"
import {ImageWrapper} from "../../assets/styles/index"
import {Product} from "../../state/appStateReducer"
import {addProductCart} from "../../state/appStateActions"
import {useAppState} from "../../utils/useAppState"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({product}: ProductCardProps) => {
    const {dispatch} = useAppState()

    return (
        <Card className="nes-container is-rounded">
            <ImageWrapper width="64">
                <img src={product.image} alt="Product"/>
            </ImageWrapper>
            <p>{product.name}</p>
            <p>{product.price} Zm</p>
            <button type="button" className="nes-btn is-primary" onClick={() => dispatch(addProductCart(product))}>Add to card</button>
        </Card>
    )
}

export default ProductCard