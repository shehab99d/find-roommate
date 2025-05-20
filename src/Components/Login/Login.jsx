import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);
    const handleLoginButton = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                }).then(() => {
                    navigate('/')
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: {errorMessage},
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };

    const handleGoogleSignIn = () => {

        console.log("Google sign in clicked");
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLoginButton} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" name='email' placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div>New to this website?? <NavLink to='/signup' className='text-blue-500'>SignUp</NavLink></div>
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
