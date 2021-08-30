import axios from "axios"
import { useEffect, useState } from "react"
import WrapperContainer from "../WrapperContainer"
import {RouteComponentProps, Link} from "react-router-dom"
import { Product } from "../../state/appStateReducer"
import {WrapperFlexed, ImageWrapper} from "../../assets/styles/index"

interface MatchParams  {
    orderId: string
}

const OrderSummary = ({match: {params: {orderId}}}: RouteComponentProps<MatchParams>) => {
    const [orderProducts, setOrderProducts] = useState<Product[] | []>([])

    const fetchOrder = async () => {
        const res = await axios.get(`http://localhost:4000/order/${orderId}`)
        return res.data
    }
    
    useEffect(() => {
        fetchOrder().then(res => {
            setOrderProducts(res.products)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <WrapperContainer title="Order Summary" padding="20px 40px">
            <h4 className="nes-text is-success">Thank you for your order</h4>
            <WrapperContainer rounded marginTop="20px">
                <div className="lists">
                    <ul className="nes-list is-circle">
                        {orderProducts.map((orderProduct, idx) => (
                            <WrapperFlexed margin="0 0 46px 0" justifyContent="space-around">
                                <ImageWrapper width="64">
                                    <img src={orderProduct.image} alt="Product"/>
                                </ImageWrapper>
                                <p>{orderProduct.description}</p>
                                <p>{orderProduct.price} Zm</p>
                            </WrapperFlexed>
                        ))}
                    </ul>
                </div>
            </WrapperContainer>
            <Link to="/" type="button" className="nes-btn is-primary">Back to the store</Link>
        </WrapperContainer>
    )
}

export default OrderSummary