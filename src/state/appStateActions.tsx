import {Product} from "./appStateReducer"

export type Action =
    {type: "SET_PRODUCTS", payload: {productList: Product[] | []}} |
    {type: "SET_CATEGORIES", payload: {categories: []}} |
    {type: "SELECT_CATEGORY", payload: string} |
    {type: "ADD_PRODUCT_CART", payload: {product: Product}} |
    {type: "REMOVE_PRODUCT_CART", payload: {productId: string}}


export const setProducts = (productList: Product[] | []): Action => ({type: "SET_PRODUCTS", payload: {productList}})
export const setCategories = (categories: []): Action => ({type: "SET_CATEGORIES", payload: {categories}})
export const setCategory = (category: string): Action => ({type: "SELECT_CATEGORY", payload: category})
export const addProductCart = (product: Product): Action => ({type: "ADD_PRODUCT_CART", payload: {product}})
export const removeProductCart = (productId: string): Action => ({type: "REMOVE_PRODUCT_CART", payload: {productId}})