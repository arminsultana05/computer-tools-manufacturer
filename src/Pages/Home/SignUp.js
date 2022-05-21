import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    // <...Create Email Authentication...>
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword({ sendEmailVerification:true} ,auth);
      const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        console.log(data);
        await  createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });
        navigate('/')
    }


    if (gUser || user) {
      navigate('/');
    }
    if(loading || gLoading || updating){
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError ||  uError) {
        signInError = <small className='text-red-500 '>{error?.message || gError?.message || uError?.message}</small>
    }

    return (
        <div>
        <div className="card w-2/3 lg:w-2/6 bg-base-200 mx-auto mt-16 mb-16 shadow-2xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">SignUp</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full  "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"

                                },
                               
                            })} />
                        <label className="label ml-2">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                           

                        </label>

                    </div>
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
                    {signInError}
                    <input className='btn text-white w-full ' type="submit" value="SignUp" />
                </form>
                <p className='ml-2'>Already have an Account? <Link to='/login' className='text-secondary'>Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline ">CONTINUE WITH GOOGLE</button>


            </div>
        </div>

    </div>
    );
};

export default SignUp;