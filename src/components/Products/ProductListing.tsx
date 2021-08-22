import {useAppState} from "../../utils/useAppState"
import {GridListing} from "../../assets/styles/index"
import WrapperContainer from "../WrapperContainer"
import ProductCard from "./ProductCard"

const ProductListing = () => {
    const {state: {productList}} = useAppState()

    return (
        <WrapperContainer title="All products">
            <GridListing gridColumnWidth={200} padding="0">
                {productList.length > 0 ? (productList.map(product => <ProductCard product={product}/>)) : null}
            </GridListing>
        </WrapperContainer>
   )
}

export default ProductListing