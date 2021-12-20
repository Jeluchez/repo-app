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
import { logout, startloginGithub, validateToken } from '../actions/authAction';
import { Code } from '../components/profile/Code';
import { useSelector } from 'react-redux';
import { fetchBasic } from '../helpers/fetchData';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { userUrl } = useSelector(state => state.auth);
    console.log(userUrl)
    useEffect(() => {
        if (!userUrl) {
            
            const code = localStorage.getItem('code');
            if (!code) {
                dispatch(logout())
                return;
            }

            fetchBasic('https://api.github.com/user', code).then((data) => {
                data.code = code;
                console.log(data);
                dispatch(startloginGithub(data))
            }).catch(error => {
                localStorage.removeItem('code');
                dispatch(logout())
            })
        }
    }, [dispatch,userUrl])



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
                    <Route exac path="/success/:code" element={
                        <PublicRoute>
                            <Code />
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
