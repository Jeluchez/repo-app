import { fetchData, fetchWithToken } from "../helpers/fetchData.js";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./uiActions";

export const startlogin = (data, trigerSubmit) => {

    delete data.checkbox;
    
    return async (dispatch) => {

        dispatch(startLoading())
        console.log(data)
        const body = await fetchData('user/new', data, 'POST');

        if (body.ok) {
            console.log(body)
            const { uid, name, email } = body.user;

            localStorage.setItem('token', body.token);

            dispatch(login(
                {
                    id:uid,
                    name,
                    email,
                    isloggedIn:true,
                    checking:false
                }
            ))
            // trigerSubmit();
            dispatch(finishLoading())

        } else {
            // trigerSubmit();
            dispatch(finishLoading())
        }
    }
}


export const validateToken = () => {

    const token = localStorage.getItem('token');

    return async (dispatch) => {
        // Si token no existe
        if (!token) {
            dispatch(login({
                uid: null,
                checking: false,
                isloggedIn: false,
                name: null,
                email: null,
            }))

            return false;
        }

        const resp = await fetchWithToken('user/renew');

        if (resp.ok) {
            localStorage.setItem('token', resp.token);
            const { user } = resp;

            dispatch(login({
                uid: user.uid,
                checking: false,
                isloggedIn: true,
                name: user.name,
                email: user.email,
            }))

            return true;
        } else {
            dispatch(login({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            }))

            return false;
        }
    }

}

export const login = (user) => ({
    type: types.login,
    payload: user
});