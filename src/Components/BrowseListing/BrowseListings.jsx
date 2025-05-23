import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
const BrowseListings = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/listings')
            .then(res => res.json())
            .then(data => {
                setListings(data);
            })
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-primary">Browse Roommate Listings</h2>

            {listings.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No listings available</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listings.map(listing => (
                        <div key={listing._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg">
                            <div className="card-body">
                                <h3 className="card-title text-2xl font-semibold text-secondary">{listing.title}</h3>
                                <p><strong>Location:</strong> {listing.location}</p>
                                <p><strong>Rent:</strong> ৳{listing.rent}</p>
                                <p><strong>Room Type:</strong> {listing.roomType}</p>
                                <p><strong>Lifestyle:</strong> {listing.lifestyle}</p>
                                <p><strong>Availability:</strong> {listing.availability}</p>
                                <p className="mt-2"><strong>Description:</strong> {listing.description}</p>

                            
                                <p className="text-sm text-gray-400 mt-4 italic">
                                    Posted by <span className="font-semibold">{listing.userName}</span> ({listing.userEmail})
                                </p>

                                <div className="mt-4">
                                    <Link
                                        to={`/details/${listing._id}`}
                                        className="btn btn-primary"
                                    >
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseListings;
