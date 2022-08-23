import { ActionTypes } from "../constants/action-types"

export const userReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return [ ...payload ];
        default:
            return state;
    }
}

export const currentUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USER:
            return { ...payload} ;
        case ActionTypes.LOG_OUT:
            return { } ;
        default:
            return state;
    }
}