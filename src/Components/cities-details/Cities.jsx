import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Cities = () => {
    const city = useLoaderData();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{city.name}</h1>
                <img
                    src={city.img}
                    alt={city.name}
                    className="w-full max-h-[400px] object-cover rounded-xl mb-6"
                />
                <p className="text-gray-600 mb-4">{city.description}</p>
                <p className="text-lg font-semibold text-indigo-600 mb-4">
                    Hotel Cost: {city.hotelCost}
                </p>
                <h2 className="text-xl font-bold text-gray-700 mb-2">Highlights</h2>
                <ul className="text-left space-y-1 text-gray-700">
                    {
                        city.highlights.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span>✅</span> <span>{item}</span>
                            </li>
                        ))
                    }
                </ul>
                <Link to={`/listing/city/${city.id}`}>
                    <button className='btn btn-primary'>Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Cities;
