import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';





const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   
    const { register, resetField, formState: { errors }, handleSubmit,reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // <...Email Authentication...>
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = (data) => {
        console.log(data);
        reset()
        signInWithEmailAndPassword(data.email, data.password)
    }
    const handleClick = (e) => {
        resetField("email");
    }
if(user || gUser){
    navigate('/dashbord')

}


    if (gUser || user) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError) {
        signInError = <small className='text-red-500 '>{error?.message || gError?.message}</small>
    }

    return (
        <div>
            <div className="card w-2/3 lg:w-2/6 bg-base-200 mx-auto mt-16 mb-16 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full  "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"

                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })} />
                            <label className="label  ml-2">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === ' pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Enter Your Password</span>
                            </label>
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"

                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    }
                                })} />
                            <label className="label  ml-2">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                        </div>
                        <p className='cursor-pointer' onClick={handleClick} >Reset Password</p>
                        {signInError}
                        <input className='btn  btn-primary  text-white w-full ' type="submit" value="Login" />
                    </form>
                    <p className='ml-2'>New to wesite? <Link to='/register' className='text-primary font-bold'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary btn-outline ">CONTINUE WITH GOOGLE</button>


                </div>
            </div>

        </div>
    );
};

export default Login;