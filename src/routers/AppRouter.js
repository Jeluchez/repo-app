import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useDispatch } from 'react-redux';
// import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../components/auth/LoginScreen';
import { DashBoardRoute } from './DashBoardRoute';
import { SignUpScreen } from '../components/auth/SignUpScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    // const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <Router>
            <div>
                <Routes>
                    <Route exac path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    } />
                    <Route exac path="/signup" element={
                        <PublicRoute>
                            <SignUpScreen />
                        </PublicRoute>
                    } />

                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashBoardRoute />
                        </PrivateRoute>
                    } />
                </Routes>
            </div>
        </Router>
    )
}
