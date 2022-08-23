import { ActionTypes } from "../constants/action-types";   
export const setAllUsers=(users)=>{
    return{
        type:ActionTypes.SET_USERS,
        payload:users
    }
}
export const setCurrentUser=(user)=>{
    return{
        type:ActionTypes.SET_USER,
        payload:user
    }
}
export const logout=()=>{
    return{
        type:ActionTypes.LOG_OUT
    }
}