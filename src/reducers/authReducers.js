
import {types} from '../types/types'


const initialState = {
    uid: null,
    checking: true,
    isloggedIn: false,
    name: null,
    email: null,
};

export const authReducers = (state = initialState, action) => {
    
    switch (action.type) {
        case types.login:
            const {id,name,isloggedIn,email,checking} = action.payload;
            return {
                uid:id,
                checking,
                isloggedIn,
                name,
                email,
            }
        case types.logout:
            return {}
        default:
            return state;
    }
}