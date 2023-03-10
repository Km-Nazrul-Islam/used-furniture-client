import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import signupImage from '../../../assets/images/login/login.svg'

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userCreate, userUpdate } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = data => {
        console.log(data)
        setSignupError('');
        userCreate(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully');

                const userInfo = {
                    name: data.name,
                    email: data.email,
                    role: data.role
                }

                fetch('https://used-furniture-server-site.vercel.app/allUser', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))

                userUpdate({displayName: data.name})
                    .then((result) => {
                        console.log(result)
                        navigate('/');
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.error(err);
                setSignupError(err.message);
            })
    }

    return (
        <div className='flex justify-center items-center rounded-xl my-8'>
            <div className='w-1/2'>
                <img src={signupImage} alt="" />
            </div>
                <div className='w-1/2 p-8'>
                    <h2 className='text-xl text-center font-bold'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type="text" {...register("name", { required: true })} className="input input-bordered w-full" />
                            {errors.name?.type === 'required' && <p className='text-red-500 mt-2'>Please Type Your Name</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" {...register("email", { required: "Type Valid Email Address" })} className="input input-bordered w-full" />
                            {errors.email && <p className='text-red-500 mt-2'>{errors.email?.message}</p>}
                        </div>


                        <div className="space-y-2 text-sm mb-3">
                            <label htmlFor="password" className="block text-primary text-sm mt-2">
                                Seller or Byer Account ?
                            </label>
                            <select
                                {...register("role")}
                                className="space-y-1 text-sm mb-3 lg:w-full py-2 px-2 outline-none "
                            >
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" {...register("password", {
                                required: "password required",
                                minLength: { value: 6, message: 'password must be 6 characters longer' },
                                // pattern: { value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/, message: 'Password Must be Stronger'}
                            })} className="input input-bordered w-full" />
                            {errors.password && <p className='text-red-500 mt-2'>{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-accent w-full my-10' value="Sign Up" type="submit" />
                        <div>
                            {signupError && <p className='text-red-500 mb-2'>{signupError}</p>}
                        </div>
                    </form>
                    <p className='text-center font-semibold'>Already Have an Account? <Link className='text-black text-xl ml-4' to="/login">Please Login</Link></p>
                </div>
        </div>
    );
};

export default SignUp;