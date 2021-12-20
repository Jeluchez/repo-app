import { LoginForm } from "./LoginForm"
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <div className="login">
           
            <div className="login__container-outer">
                <div className="login__container">
                    <div className="login__header">
                        <h2 className="title">Log in to RepoApp</h2>
                    </div>
                    {/* form-wrapper */}
                    <div className="login__form-wrapper">
                        <LoginForm />
                    </div>
                    <div className="login__footer">
                        <span>Not a member? </span>
                        <Link to="/signup">Sign up now</Link>
                    </div>
                </div>
            </div>

            <div className="auth-info login__info">
                <h2>RepoApp</h2>
                <p>let it surprise you, and start to use RepoApp</p>
            </div>
        </div>
    )
}