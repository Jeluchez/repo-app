import { Route, Navigate } from 'react-router-dom';

const user = {
    isLoggedIn: false
}

export const PrivateRoute = ({ children }) => {

    return user.isLoggedIn
        ? children
        : <Navigate to='/login' />

}
