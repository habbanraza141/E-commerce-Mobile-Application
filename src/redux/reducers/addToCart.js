import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const initialState = []
export const addToCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        case REMOVE_FROM_CART:
            let result = state.filter(item=>{
                return item.name!= action.data
            })
            return [...result]
        default:
            return state
    }
}