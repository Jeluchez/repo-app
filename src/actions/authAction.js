import { fetchData } from "../helpers/fetchData.js";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./uiActions";

export const startlogin = (data, isLogued) => {
    return async (dispatch) => {

        dispatch(startLoading())

        const body = await fetchData('auth/login', data, 'POST');

        if (body.ok) {
            const { iduser: id, name, email } = body.data.user;

            dispatch(login(
                {
                    id,
                    name,
                    email
                }
            ))
            isLogued(true);
            dispatch(finishLoading())

        } else {
            isLogued(false);
            dispatch(finishLoading())
        }
    }
}


export const login = (user) => ({
    type: types.login,
    payload: user
});