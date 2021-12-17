import { Route, Navigate } from 'react-router-dom';

const user = {
    isLoggedIn: true
}

export const PublicRoute = ({ children }) => {

    return user.isLoggedIn
        ? children
        : <Navigate to='/dashboard' />
}

