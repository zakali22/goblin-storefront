import {useAppState} from "../../utils/useAppState"
import {GridListing} from "../../assets/styles/index"
import WrapperContainer from "../WrapperContainer"
import ProductCard from "./ProductCard"
import SortingHeader from "./SortingHeader"

const ProductListing = () => {
    const {state: {productList}} = useAppState()

    return (
        <>
        <SortingHeader />
        <WrapperContainer title="All products">
            <GridListing gridColumnWidth={200} padding="0">
                {productList.length > 0 ? (productList.map(product => <ProductCard product={product}/>)) : null}
            </GridListing>
        </WrapperContainer>
        </>
   )
}

export default ProductListing