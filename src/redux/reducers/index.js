import {combineReducers} from 'redux'
import { cartReducer, productReducer, selectedProductReducer } from './productReducer'

const reducers=combineReducers({
    allProducts:productReducer,
    currentProduct:selectedProductReducer,
    cart:cartReducer
})
export default reducers;            