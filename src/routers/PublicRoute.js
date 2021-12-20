import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ children }) => {

    const { isloggedIn } = useSelector(state => state.auth);

    return isloggedIn
        ? <Navigate to='/profile' />
        : children
}

