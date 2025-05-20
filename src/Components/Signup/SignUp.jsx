import React, { useContext } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmitButton = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                // Signed up 
                const user = result.user;
                // console.log(user);
                setUser(user);
                Swal.fire({
                    title: "Success!",
                    text: "Your account has been created successfully.",
                    icon: "success",
                    confirmButtonText: "Go to Home"
                }).then(() => {
                    navigate('/');
                });


            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });

    }

    const handleGoogleSignIn = () => {

        console.log("Google SignIn clicked");
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmitButton} className="fieldset">
                        <label className="label">Username</label>
                        <input type="text" name='username' className="input" placeholder="Username" />

                        <label className="label">PhotoURL</label>
                        <input type="text" className="input" name='photoURL' placeholder="PhotoURL" />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline btn-primary mt-4 flex items-center justify-center gap-2"
                        >
                            <FcGoogle size={24} />
                            Sign in with Google
                        </button>

                        <div>
                            Already have an account?{' '}
                            <NavLink to='/login' className='text-blue-500'>Login</NavLink>
                        </div>
                        <button className="btn btn-neutral mt-4">SignUp</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
