import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CURRENT_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_CURRENT_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const cartReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return [...state, payload];
        case ActionTypes.REMOVE_FROM_CART:
            return state.filter((item) => item._id != payload)
        case ActionTypes.INCREMENT:
            return state.map(item => (item._id === payload ? { ...item, quantity: item.quantity+1 } : item));;
        case ActionTypes.DECREMENT:
            return state.map(item => (item._id === payload ? { ...item, quantity: item.quantity-1 } : item));;
        default:
            return state;
    }
}