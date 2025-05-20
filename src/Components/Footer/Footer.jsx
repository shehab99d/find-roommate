import React, { useContext } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    const security = (path) => {
        if (user && user.email) {
            navigate(path);
        } else {
            navigate('/login');
        }
    }

    return (
        <footer className="bg-base-200 text-base-content pt-10 pb-5 border-t border-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

                <div>
                    <Link
                        to="/"
                        className="text-2xl font-extrabold text-primary hover:text-primary-focus transition duration-300"
                    >
                        RoommateFinder
                    </Link>
                    <p className="mt-3 text-sm">
                        Find your perfect roommate based on your budget, location and lifestyle.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:text-primary">Home</Link>
                        </li>
                        <li onClick={() => security("/browse-listing")} className="hover:text-primary cursor-pointer">
                            Browse Listings
                        </li>
                        <li onClick={() => security("/add-listing")} className="hover:text-primary cursor-pointer">
                            Add Listing
                        </li>
                        <li onClick={() => security("/listing")} className="hover:text-primary cursor-pointer">
                            My Listings
                        </li>
                        <li onClick={() => security("/Add-To-Find-Roommate")} className="hover:text-primary cursor-pointer">
                            Add to Find Roommate
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-sm">Email: support@roommatefinder.com</p>
                    <p className="text-sm mt-1">Phone: +880-1234-567890</p>
                    <p className="text-sm mt-1">Location: Dhaka, Bangladesh</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-primary" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="hover:text-primary" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" className="hover:text-primary" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="hover:text-primary" aria-label="GitHub"><FaGithub /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm">
                © {new Date().getFullYear()} RoommateFinder. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
