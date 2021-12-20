import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const { isloggedIn} = useSelector(state => state.auth);
   
    return isloggedIn
        ? children
        : <Navigate to='/login' />

}
