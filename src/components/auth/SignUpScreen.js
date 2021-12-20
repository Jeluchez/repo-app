import React from 'react'
import { Link } from 'react-router-dom'
import { SignUpForm } from "./SignUpForm"

export const SignUpScreen = () => {
   
    return (

        <div className="sign">
            <div className="sign__container-outer">
                <div className="sign__container">
                    <div className="sign__header">
                        <h2 className="title">Sign Up to RepoApp</h2>
                    </div>

                    {/* form-wrapper */}
                    <div className="sign__form-wrapper">
                        <SignUpForm />
                    </div>

                    <div className="sign__footer">
                        <span>Already a member? </span>
                        <Link to="/login">Log in now</Link>
                    </div>
                </div>
            </div>

            <div className="auth-info sign__info">
                <h2>RepoApp</h2>
                <p>let it surprise you, and start to use RepoApp</p>

            </div>
        </div>
    )
}
