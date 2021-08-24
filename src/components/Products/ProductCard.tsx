import {Card} from "../../assets/styles/components/Card"
import {ImageWrapper} from "../../assets/styles/index"
import {Product} from "../../state/appStateReducer"
import {addProductCart} from "../../state/appStateActions"
import {useAppState} from "../../utils/useAppState"
import { useEffect, useState } from "react"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({product}: ProductCardProps) => {
    const {state: {cart}, dispatch} = useAppState()
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
        const itemExists = cart.find(cartItem => cartItem._id === product._id)
        setIsAdded(!!itemExists)
    }, [cart, product])

    return (
        <Card className="nes-container is-rounded">
            <ImageWrapper width="64">
                <img src={product.image} alt="Product"/>
            </ImageWrapper>
            <p>{product.name}</p>
            <p>{product.price} Zm</p>
            <button type="button" className="nes-btn is-primary" disabled={isAdded} onClick={() => dispatch(addProductCart(product))}>Add to card</button>
        </Card>
    )
}

export default ProductCard