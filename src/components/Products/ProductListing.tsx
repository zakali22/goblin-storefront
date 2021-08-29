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
        console.log(products)
        const filteredList = products.filter(product => {
            return product.category.toLowerCase() === selectedCategory
        })
        setFilteredProducts(filteredList)
    }, [products, selectedCategory])

    return (
        <>
        <SortingHeader />
        <WrapperContainer title={selectedCategory === 'all' ? `${selectedCategory} products` : selectedCategory}>
            <GridListing gridColumnWidth={200} padding="0">
                {filteredProducts.length > 0 ? 
                    (filteredProducts.map((product, idx) => <ProductCard key={idx} product={product}/>)) : 
                    (products.map((product, idx) => <ProductCard key={idx} product={product}/>))}
            </GridListing>
        </WrapperContainer>
        </>
   )
}

export default ProductListing