import {Action} from "./appStateActions"

export type Product = {
    _id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: string
}

type Category = {
    name: string
}

export type AppState = {
    categories: Category[] | [],
    productList: Product[] | [],
    selectedCategory: string,
    cart: Product[] | []
}

export const appData: AppState = {
    categories: [],
    productList: [],
    selectedCategory: '',
    cart: []
}

export function appReducer(state: AppState, action: Action){
    switch(action.type){
        case "SET_CATEGORIES":  
            return {
                ...state,
                categories: action.payload.categories
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                productList: action.payload.productList
            } 
        case "SELECT_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload
            }
        case "ADD_PRODUCT_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload.product]
            }
        case "REMOVE_PRODUCT_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload.productId)
            }
        case "CLEAR_PRODUCT_CART": 
            return {
                ...state,
                cart: []
            }
        default: 
            return state
    }
}