import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
    }


    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center mb-3'>Have an account ? <Link to='/login' className='text-primary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;