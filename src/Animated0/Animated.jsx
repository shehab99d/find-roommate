import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animated = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="max-w-7xl mt-10 mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">

            <div
                data-aos="fade-right"
                className="w-full md:w-1/3 flex justify-center"
            >
                <img
                    src="https://i.ibb.co/Z1g4m3q0/phone-en.webp"
                    alt="Left Side"
                    className="rounded-lg shadow-lg"
                />
            </div>


            <div
                data-aos="fade-up"
                className="w-full md:w-1/5 text-center md:text-left px-4"
            >
                <h2 className="text-4xl font-extrabold text-gradient bg-clip-text text-yellow-400 mb-6">
                    Find Your Perfect Roommate
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed tracking-wide font-light">
                    Connect with like-minded people who share your lifestyle and preferences.
                    Our platform helps you find trustworthy roommates in your preferred location with ease and security.
                </p>
            </div>


            <div
                data-aos="fade-left"
                className="w-full md:w-1/3 flex justify-center "
            >
                <img
                    src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80"
                    alt="Right Side"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default Animated;