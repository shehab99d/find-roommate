import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2';
import ThemeToggle from "../ThemeToggle";



const Navbar = () => {
    const { logOut, loading, user } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg text-primary"></span>
            </div>
        );
    }

    const logOutButton = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged out!",
                    text: "You have been successfully logged out.",
                    icon: "success",
                    confirmButtonText: "OK",
                    timer: 2000
                }).then(() => {
                    navigate("/");
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    const handleProtectedRoute = (path) => {
        if (user) {
            navigate(path);
        } else {
            navigate("/login", { state: { from: { pathname: path } } });
        }
    };

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <NavLink
                        to="/"
                        className="text-3xl font-extrabold text-primary hover:text-primary-focus transition duration-300"
                    >
                        RoommateFinder
                    </NavLink>


                    <div className="hidden md:flex space-x-6 items-center text-lg font-medium">
                        <NavLink to="/" className="hover:text-primary-focus transition">Home</NavLink>

                        <button onClick={() => handleProtectedRoute("/Add-To-Find-Roommate")} className="hover:text-primary-focus transition">
                            Add to Find Roommate
                        </button>

                        <NavLink to="/browse-listing" className="hover:text-primary-focus transition">
                            Browse Listing
                        </NavLink>

                        <button onClick={() => handleProtectedRoute("/listing")} className="hover:text-primary-focus transition">
                            My Listings
                        </button>
                        <ThemeToggle></ThemeToggle>




                        {!user ? (
                            <>
                                <NavLink to="/login" className="btn btn-sm btn-outline btn-primary">Login</NavLink>
                                <NavLink to="/signup" className="btn btn-sm btn-primary ml-3">SignUp</NavLink>
                            </>
                        ) : (
                            <div className="flex items-center space-x-3 cursor-pointer">
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                    <img src={user.photoURL || "/default-avatar.png"} alt="User" className="w-10 h-10 rounded-full border-2 border-primary" />
                                </div>
                                <button onClick={logOutButton} className="btn btn-sm btn-error">Log out</button>
                            </div>
                        )}
                    </div>


                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-square btn-ghost">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-base-100 px-6 pt-4 pb-6 space-y-4">
                    <NavLink to="/" className="block py-2 text-lg font-medium hover:text-primary">Home</NavLink>
                    <button onClick={() => handleProtectedRoute("/Add-To-Find-Roommate")} className="block w-full text-left py-2 text-lg hover:text-primary">
                        Add to Find Roommate
                    </button>
                    <NavLink to="/browse-listing" className="block py-2 text-lg font-medium hover:text-primary">Browse Listing</NavLink>
                    <button onClick={() => handleProtectedRoute("/listing")} className="block w-full text-left py-2 text-lg hover:text-primary">
                        My Listings
                    </button>

   
                    <div>
                        <ThemeToggle />
                    </div>

                    {!user ? (
                        <>
                            <NavLink to="/login" className="btn btn-outline btn-primary w-full">Login</NavLink>
                            <NavLink to="/signup" className="btn btn-primary w-full mt-2">Signup</NavLink>
                        </>
                    ) : (
                        <button onClick={logOutButton} className="btn btn-error w-full mt-2">Log out</button>
                    )}
                </div>
            )}

        </nav>
    );
};

export default Navbar;
