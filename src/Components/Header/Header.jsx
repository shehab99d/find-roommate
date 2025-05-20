import React from 'react';
import { Slide } from "react-awesome-reveal";

const Header = () => {
    return (
        <div>
            <section className="bg-base-200 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">

                    {/* Left Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Find Your Perfect Roommate
                        </h1>
                        <p className="py-6 text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                            Easily connect with potential roommates and make your housing search smooth and simple.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="/browse" className="btn btn-primary px-6 py-3 text-base sm:text-lg">
                                Browse Listings
                            </a>
                            <a href="/add" className="btn btn-outline btn-primary px-6 py-3 text-base sm:text-lg">
                                Add Your Listing
                            </a>
                        </div>
                    </div>

                    {/* Right Image with Slide Animation */}
                    <div className="md:w-1/2 w-full max-w-md mx-auto md:mx-0">
                        <Slide direction="right" duration={1000}>
                            <img
                                src="https://i.ibb.co/7t0TSq7P/HEADER-16x9-Gettypulls-4.webp"
                                alt="Roommate Illustration"
                                className="w-full rounded-xl"
                            />
                        </Slide>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Header;
