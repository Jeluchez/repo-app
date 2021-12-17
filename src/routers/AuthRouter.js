import { Routes, Route, Navigate } from 'react-router-dom'

export const AuthRouter = () => {
    return (

        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    {/* <Route path="/auth/login" component={LoginScreen} />
                    <Route path="/auth/register" component={RegisterScreen} />

                    <Navigate to="/auth/login" /> */}

                </Routes>
            </div>
        </div>

    )
}
