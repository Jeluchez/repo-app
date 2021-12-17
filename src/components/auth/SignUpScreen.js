import React from 'react'
import { Link } from 'react-router-dom'
import { SignUpForm } from "./SignUpForm"

export const SignUpScreen = () => {
   
    return (

        <div className="sign">
            <div className="sign__info">
                <h2>RepoApp</h2>
                <p>See your application</p>

            </div>
            <div className="sign__container-outer">
                <div className="sign__container">
                    <div className="sign__header">
                        <h2 className="title">Sign Up to RepoApp</h2>
                        <div className="google">
                            <h3>Acceder con google</h3>
                        </div>
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
        </div>
    )
}
