import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { signInGoogle, createUser, setUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmitButton = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.username.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                title: "Invalid Password!",
                text: "Password must be at least 6 characters long and contain at least 1 uppercase letter and 1 number.",
                icon: "error",
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL });
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    });


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
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
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
                    navigate('/');
                });
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error);
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
                    <form onSubmit={handleSubmitButton}>
                        <label className="label">Username</label>
                        <input type="text" name='username' className="input" placeholder="Username" required />

                        <label className="label">PhotoURL</label>
                        <input type="text" className="input" name='photoURL' placeholder="PhotoURL" required />

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                            required
                        />
                        <p className="text-sm text-gray-500 mt-1 mb-3">
                            Password must be at least 6 characters, include 1 uppercase letter and 1 number.
                        </p>

                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline btn-primary mt-2 flex items-center justify-center gap-2"
                        >
                            <FcGoogle size={24} />
                            Sign in with Google
                        </button>

                        <div className="mt-4 text-sm">
                            Already have an account?{' '}
                            <NavLink to='/login' className='text-blue-500 underline'>Login</NavLink>
                        </div>

                        <button type="submit" className="btn btn-neutral mt-4 w-full">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
