import { useEffect, useState } from "react"
import {useAppState} from "../../utils/useAppState"
import {GridListing} from "../../assets/styles/index"
import WrapperContainer from "../WrapperContainer"
import ProductCard from "./ProductCard"
import SortingHeader from "./SortingHeader"
import {Product} from "../../state/appStateReducer"

type ProductListingProps = {
    products: Product[]
}

const ProductListing = ({products}: ProductListingProps) => {
    const {state: {selectedCategory}} = useAppState()
    const [filteredProducts, setFilteredProducts] = useState<Product[] | []>(products)

    useEffect(() => {
        setFilteredProducts(products)
        const filteredList = filteredProducts.filter(product => {
            return product.category.toLowerCase() === selectedCategory
        })
        console.log(filteredList)
    }, [products])

    return (
        <>
        <SortingHeader />
        <WrapperContainer title={selectedCategory}>
            <GridListing gridColumnWidth={200} padding="0">
                {filteredProducts.length > 0 ? (filteredProducts.map((product, idx) => <ProductCard key={idx} product={product}/>)) : null}
            </GridListing>
        </WrapperContainer>
        </>
   )
}

export default ProductListing