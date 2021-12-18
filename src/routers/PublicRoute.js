import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const user = {
    isLoggedIn: true
}

export const PublicRoute = ({ children }) => {

    // const { isloggedIn } = useSelector(state => state.auth);

    return user.isLoggedIn
        ? children
        : <Navigate to='/dashboard' />
}

