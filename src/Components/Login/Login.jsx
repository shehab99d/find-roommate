import React, { useContext } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // আগের পেজের path ধরে রাখছি
    const from = location.state?.from || "/";

    const { login, signInGoogle } = useContext(AuthContext);

    const handleLoginButton = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                Swal.fire({
                    title: "Login Successful!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                }).then(() => {
                    navigate(from, { replace: true });  // আগের পেজে রিডাইরেক্ট
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            });
    };

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                Swal.fire({
                    title: "Google Sign-In Successful!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                }).then(() => {
                    navigate(from, { replace: true });  // আগের পেজে রিডাইরেক্ট
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Google Sign-In Failed!",
                    text: error.message
                });
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLoginButton} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <div className='mt-2'>
                            New to this website?{" "}
                            <NavLink to='/signup' className='text-blue-500 hover:underline'>Sign Up</NavLink>
                        </div>

                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline btn-primary w-full flex items-center justify-center gap-2"
                    >
                        <FcGoogle size={24} />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
