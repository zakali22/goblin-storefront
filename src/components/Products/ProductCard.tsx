import {Card} from "../../assets/styles/components/Card"
import {ImageWrapper} from "../../assets/styles/index"
import {Product} from "../../state/appStateReducer"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({product: {_id, image, name, price, description}}: ProductCardProps) => (
    <Card className="nes-container is-rounded">
        <ImageWrapper width="64">
            <img src={image} alt="Product"/>
        </ImageWrapper>
        <p>{name}</p>
        <p>{price} Zm</p>
        <button type="button" className="nes-btn is-primary">Add to card</button>
    </Card>
)

export default ProductCard