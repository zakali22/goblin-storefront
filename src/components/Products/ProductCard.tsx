import {Card} from "../../assets/styles/components/Card"
import {ImageWrapper} from "../../assets/styles/index"

const ProductCard = () => (
    <Card className="nes-container is-rounded">
        <ImageWrapper width="64">
            <img src={'/images/broad_sword.png'} alt="Product"/>
        </ImageWrapper>
        <p>Rusty Sword</p>
        <p>50 Zm</p>
        <button type="button" className="nes-btn is-primary">Add to card</button>
    </Card>
)

export default ProductCard