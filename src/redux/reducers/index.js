import {combineReducers} from 'redux'
import { cartReducer, orderReducer, productReducer, selectedProductReducer } from './productReducer'
const reducers=combineReducers({
    allProducts:productReducer,
    currentProduct:selectedProductReducer,
    cart:cartReducer,
    orders:orderReducer
})
export default reducers;            