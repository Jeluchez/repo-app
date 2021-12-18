import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const user = {
    isLoggedIn: true
}

export const PublicRoute = ({ children }) => {

    const { isloggedIn } = useSelector(state => state.auth);
    
    console.log(isloggedIn)

    return isloggedIn
        ? <Navigate to='/dashboard' />
        : children
}

