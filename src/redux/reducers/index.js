import {combineReducers} from 'redux'
import { cartReducer, orderReducer, productReducer, selectedProductReducer } from './productReducer'
import { currentUserReducer, userReducer } from './userRecuder';
const reducers=combineReducers({
    allProducts:productReducer,
    currentProduct:selectedProductReducer,
    cart:cartReducer,
    orders:orderReducer,
    allUsers:userReducer,
    currentUser:currentUserReducer
})
export default reducers;            