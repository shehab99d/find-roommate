import React from 'react';
import { FaClock } from 'react-icons/fa';

const BookNow = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-purple-200 p-6">
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-lg">
                <FaClock className="text-5xl text-purple-500 mx-auto mb-4 animate-pulse" />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Feature Coming Soon!</h1>
                <p className="text-gray-600 mb-4">
                    We're working hard to bring you the ability to book your favorite rooms directly from our platform.
                </p>
                <p className="text-sm text-gray-500">
                    Stay tuned — exciting things are on the way!
                </p>
            </div>
        </div>
    );
};

export default BookNow;
