import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const user = {
    isLoggedIn: false
}

export const PrivateRoute = ({ children }) => {

    // const { isloggedIn } = useSelector(state => state.auth);
    
    return user.isLoggedIn
        ? children
        : <Navigate to='/login' />

}
