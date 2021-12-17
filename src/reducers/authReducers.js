
import {types} from '../types/types'

const initialState = {
    uid: null,
    name: null
}


export const authReducers = (state = initialState, action) => {
    
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {}
        default:
            return state;
    }
}