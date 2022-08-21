import { ActionTypes } from "../constants/action-types";
export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};
export const setCurrentProduct=(product)=>{
    return{
        type:ActionTypes.SET_CURRENT_PRODUCT,
        payload:product
    }
}
export const removeCurrentProduct=()=>{
    return{
        type:ActionTypes.REMOVE_CURRENT_PRODUCT
    }
}
export const addToCart=(product)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product
    }
}
export const removeFromCart=(id)=>{
    return{
        type:ActionTypes.REMOVE_FROM_CART,
        payload:id
    }
}
export const itemIncrement=(id)=>{
    return{
        type:ActionTypes.INCREMENT,
        payload:id
    }
}
export const itemDecrement=(id)=>{
    return{
        type:ActionTypes.DECREMENT,
        payload:id
    }
}