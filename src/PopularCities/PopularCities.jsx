import React from 'react';
import { Link } from 'react-router-dom';

const popularCities = [
    { id: 1, name: 'New York', img: 'https://i.ibb.co/sJXg0srN/images.jpg' },
    { id: 2, name: 'Los Angeles', img: 'https://i.ibb.co/qFsYWLq7/i-Stock-1463288473-1.jpg' },
    { id: 3, name: 'Chicago', img: 'https://i.ibb.co/v63ZVZ4Z/intercontinental-chicago-5377570366-2x1.webp' },
    { id: 4, name: 'Japan', img: 'https://i.ibb.co/tGJ0vpg/Japan-2107x1406.jpg' },
    { id: 5, name: 'Miami', img: 'https://i.ibb.co/RGxW1Yp6/339657-Downtown-Miami.webp' },
    { id: 6, name: 'San Francisco', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80' },
    { id: 7, name: 'Istanbul', img: 'https://i.ibb.co/cK03YfSm/istanbul.jpg' },
    { id: 8, name: 'Boston', img: 'https://i.ibb.co/JbB2J7c/images-1.jpg' },
    { id: 9, name: 'Denver', img: 'https://i.ibb.co/DDzRjcTp/images-2.jpg' },
    { id: 10, name: 'Atlanta', img: 'https://i.ibb.co/DP0V2Dh9/Alanta-Lithuania-panoramio-1.jpg' },
    { id: 11, name: 'Austin', img: 'https://i.ibb.co/Z6Y48Xmc/austin-best.jpg' },
    { id: 12, name: 'Portland', img: 'https://i.ibb.co/LDcv2yJW/portland.webp' },
    { id: 13, name: 'Philadelphia', img: 'https://i.ibb.co/XfQh2BWT/seattle-Getty-Images-522616386.webp' },
    { id: 14, name: 'Las Vegas', img: 'https://i.ibb.co/hFW0QJWf/Las-Vegas-banner-0.jpg' },
    { id: 15, name: 'San Diego', img: 'https://i.ibb.co/HpFwcL2k/san-Dieog-best.webp' },
];

const PopularCitiesSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-extrabold mb-10 text-primary">
                View rooms in popular cities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {popularCities.map(city => (
                    <Link
                        key={city.id}
                        to={`/listings/city/${city.id}`}
                        className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    >

                        <img
                            src={city.img}
                            alt={city.name}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-3 font-semibold transition-transform duration-500 group-hover:translate-y-12">
                            {city.name}
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {city.name}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PopularCitiesSection;
