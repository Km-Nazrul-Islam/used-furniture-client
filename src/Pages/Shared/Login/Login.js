import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { userLogin, userGoogleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('')
        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setLoginError(err.message);
            })      

    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        userGoogleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }

    
    
    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-xl font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is Required',
                                minLength: { value: 6, message: 'Password must be 6 character or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>

                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-500 mt-4'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-4'>Book Your Product ? <Link className='text-primary text-xl' to="/signup">Creat New Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full' onClick={handleGoogleSignIn}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;