import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = null; // ইউজার লগইন না থাকলে null, থাকলে user object

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <a
                        href="/"
                        className="text-3xl font-extrabold text-primary hover:text-primary-focus transition duration-300"
                    >
                        RoommateFinder
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center text-lg font-medium">
                        <a
                            href="/"
                            className="hover:text-primary-focus transition duration-300 ease-in-out"
                        >
                            Home
                        </a>

                        {user && (
                            <a
                                href="/add"
                                className="hover:text-primary-focus transition duration-300 ease-in-out"
                            >
                                Add to Find Roommate
                            </a>
                        )}

                        <a
                            href="/browse"
                            className="hover:text-primary-focus transition duration-300 ease-in-out"
                        >
                            Browse Listing
                        </a>

                        {user && (
                            <a
                                href="/mylistings"
                                className="hover:text-primary-focus transition duration-300 ease-in-out"
                            >
                                My Listings
                            </a>
                        )}

                        {!user ? (
                            <>
                                <a
                                    href="/login"
                                    className="btn btn-sm btn-outline btn-primary px-5 py-2 rounded-lg hover:bg-primary hover:text-white transition duration-300"
                                >
                                    Login
                                </a>
                                <a
                                    href="/signup"
                                    className="btn btn-sm btn-primary ml-3 px-5 py-2 rounded-lg hover:bg-primary-focus transition duration-300"
                                >
                                    Signup
                                </a>
                            </>
                        ) : (
                            <div className="flex items-center space-x-3 cursor-pointer">
                                <div
                                    className="tooltip tooltip-bottom"
                                    data-tip={user.displayName || "User"}
                                >
                                    <img
                                        src={user.photoURL || "/default-avatar.png"}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-primary"
                                    />
                                </div>
                                <button className="btn btn-sm btn-error px-4 py-2 rounded-lg hover:bg-error-focus transition duration-300">
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="btn btn-square btn-ghost hover:bg-gray-200 transition duration-200"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-base-100 px-6 pt-4 pb-6 space-y-4 shadow-lg border-t border-gray-200">
                    <a
                        href="/"
                        className="block py-2 text-lg font-medium hover:text-primary transition duration-300"
                    >
                        Home
                    </a>

                    {user && (
                        <a
                            href="/add"
                            className="block py-2 text-lg font-medium hover:text-primary transition duration-300"
                        >
                            Add to Find Roommate
                        </a>
                    )}

                    <a
                        href="/browse"
                        className="block py-2 text-lg font-medium hover:text-primary transition duration-300"
                    >
                        Browse Listing
                    </a>

                    {user && (
                        <a
                            href="/mylistings"
                            className="block py-2 text-lg font-medium hover:text-primary transition duration-300"
                        >
                            My Listings
                        </a>
                    )}

                    {!user ? (
                        <>
                            <a
                                href="/login"
                                className="block py-2 btn btn-outline btn-primary w-full rounded-lg text-center"
                            >
                                Login
                            </a>
                            <a
                                href="/signup"
                                className="block py-2 btn btn-primary w-full rounded-lg text-center mt-2"
                            >
                                Signup
                            </a>
                        </>
                    ) : (
                        <button className="btn btn-error w-full rounded-lg mt-2 py-2">
                            Log out
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
