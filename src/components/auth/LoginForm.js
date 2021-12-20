import { useRef } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { startlogin } from '../../actions/authAction';


export const LoginForm = () => {

    const clientID = '53088d73f92fd54ccefe';
    // let navigate = useNavigate();
    const dispatch = useDispatch();

    const isloading = false
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const email = watch('email', 'Susana Paz');
    const password = watch('password', '123456');

    // flag to know if the btn "Send" was trigger
    const submitRef = useRef();

    const onSubmit = () => dispatch(startlogin({ email, password }, (res) => {
       
        if (!res.ok) {
            submitRef.current = { isSend: true, code: res.code }
            return;
        }
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientID}`;

    }));


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="login__form">
            {
                (submitRef.current?.code === 400 && submitRef.current.isSend) &&
                <p className="text-danger text-error mb-0">the user not exists</p>

            }
            {
                (submitRef.current?.code === 403 && submitRef.current.isSend) &&
                <p className="text-danger text-error mb-0">the passwort isn't correct</p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <a href={`https://github.com/login/oauth/authorize?client_id=${clientID}`}>Github</a> */}
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
                        <a href="#/"><span>Forgot password?</span></a>
                    </div>

                    <input type="password" className={errors.password ? 'form-control input-password is-invalid' : 'form-control input-password'}  {...register("password", { required: true, minLength: 6 })} />

                    {/*Validation Messages for ther Password  */}

                    {errors.password && errors.password.type === "required" && <span className="text-danger text-error">This field is required</span>}
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger text-error">the length of your password is less than 5 characters</span>}

                </div>

                <button type="submit" className="btn btn-register" /*disabled={isloading}*/>
                    {
                        isloading
                            ?
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only"></span>
                            </div>
                            :
                            'Send'

                    }

                </button>
            </form>
        </div>
    );
}
