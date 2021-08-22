import {Action} from "./appStateActions"

type Product = {
    name: string,
    description: string,
    image: string,
    price: number
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
        default: 
            return state
    }
}