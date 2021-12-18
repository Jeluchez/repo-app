import { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { startlogin } from '../../actions/authAction';

export const SignUpForm = () => {


    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { isloggedIn } = useSelector(state => state.auth);

    const isloading = false

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const email = watch('email', 'Susana Paz');
    const password = watch('password', '123456');
    const name = watch('name', 'test6@test.com')

    // flag to enable text "El correo o el usuario es incorrecto"
    const submitRef = useRef();
    const isSuccessRef = useRef();

    const onSubmit = async (e) => {
        submitRef.current = true;

        dispatch(startlogin({ name, email, password }, (res) => {

           
            if (!res.ok) {
                isSuccessRef.current = res.code
            }
            navigate('/profile');

        }));

    }
    // const onSubmit = (data) => dispatch(startlogin(data, (success) => {
    //     submitRef.current = true;
    // }));

    return (
        <div className="sign__form">
            {
                (isSuccessRef.current === 400 && submitRef.current) &&
                <p className="text-danger text-error mb-0 text-center">the user not exists</p>

            }
            {
                (isSuccessRef.current === 403 && submitRef.current) &&
                <p className="text-danger text-error mb-0 text-center">the passwort isn't correct</p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group form-group-email">
                    <label htmlFor="Name" className="email-title">Name</label>

                    <input className={errors.name ? 'form-control input-password is-invalid' : 'form-control input-password'} defaultValue="" {...register("name", { required: true })} />

                    {/*Validation Messages for the Username   */}
                    {errors.name && errors.name.type === "required" && <span className="text-danger text-error">This field is required</span>}

                </div>

                <div className="form-group form-group-email">
                    <label htmlFor="Email" className="email-title">Email Addres</label>

                    <input className={errors.email ? 'form-control input-password is-invalid' : 'form-control input-password'} defaultValue="" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                    {/*Validation Messages for the Email   */}

                    {errors.email && errors.email.type === "required" && <span className="text-danger text-error">This field is required</span>}
                    {errors.email && errors.email.type === "pattern" && <span className="text-danger text-error">The Email is incorrect</span>}

                </div>

                <div className="form-group form-group-password">
                    <div className="password-title">
                        <label htmlFor="Password">Password</label>
                    </div>

                    <input className={errors.password ? 'form-control input-password is-invalid' : 'form-control input-password'}  {...register("password", { required: true, minLength: 6 })} />

                    {/*Validation Messages for ther Password  */}

                    {errors.password && errors.password.type === "required" && <span className="text-danger text-error">This field is required</span>}
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger text-error">the length of your password is less than 5 characters</span>}

                </div>

                <div className="form-group ">

                    <div className='form-group-check'>
                        <input className={errors.checkbox ? 'is-invalid' : ''} {...register("checkbox", { required: true })} type="checkbox" />
                        <div className='terms'>
                            <span >Creating an account means you’re okay with </span>
                            <a href='/#'> our Terms & conditions</a>
                        </div>
                    </div>



                    {/*Validation Messages for ther Check  */}

                    {errors.checkbox && errors.checkbox.type === "required" && <span className="text-danger text-error">This field is required</span>}

                </div>

                <button className="btn btn-register" /*disabled={isloading}*/>
                    {
                        isloading
                            ?
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only"></span>
                            </div>
                            :
                            'Iniciar'

                    }

                </button>
            </form>
        </div>
    )
}
