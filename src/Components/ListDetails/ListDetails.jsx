import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ListDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setListing(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching listing:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center text-lg text-primary font-medium mt-10">Loading...</p>;
    }

    if (!listing) {
        return <p className="text-center text-lg text-red-500 font-medium mt-10">Listing not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-md rounded-lg mt-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">{listing.title}</h2>
            <p><strong>Location:</strong> {listing.location}</p>
            <p><strong>Rent:</strong> ৳{listing.rent}</p>
            <p><strong>Room Type:</strong> {listing.roomType}</p>
            <p><strong>Lifestyle:</strong> {listing.lifestyle}</p>
            <p><strong>Availability:</strong> {listing.availability}</p>
            <p className="my-2"><strong>Description:</strong> {listing.description}</p>
            <p><strong>Contact:</strong> {listing.contact}</p>
            <p className="mt-4 text-sm text-gray-400 italic">
                Posted by <span className="font-semibold">{listing.userName}</span> ({listing.userEmail})
            </p>
        </div>
    );
};

export default ListDetails;
