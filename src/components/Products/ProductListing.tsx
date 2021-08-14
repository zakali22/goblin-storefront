import {GridListing} from "../../assets/styles/index"
import WrapperContainer from "../WrapperContainer"
import ProductCard from "./ProductCard"

const ProductListing = () => (
    <WrapperContainer title="Weapons">
        <GridListing gridColumnWidth={200} padding="0">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </GridListing>
    </WrapperContainer>
)

export default ProductListing