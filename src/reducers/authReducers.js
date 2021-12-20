
import { types } from '../types/types'


const initialState = {
    uid: null,
    checking: true,
    isloggedIn: false,
    name: null,
    login:null,
    email: null,
    code: null,
    reposUrl: null,
    starredUrl: null,
    avatarUrl: null,
    userUrl: null
};

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            const { id, name, isloggedIn, email, checking, code } = action.payload;
            return {
                ...initialState,
                uid: id,
                checking,
                isloggedIn,
                name,
                email,
                code
            }
        case types.loginGithub:
            return {
                ...initialState,
                name:action.payload.name,
                login:action.payload.login,
                isloggedIn: true,
                code: action.payload.code,
                reposUrl: action.payload.repos_url,
                starredUrl: action.payload.starred_url,
                avatarUrl: action.payload.avatar_url,
                userUrl: action.payload.url
            }
        case types.logout:
            return {
                isloggedIn:false
            }
        default:
            return state;
    }
}