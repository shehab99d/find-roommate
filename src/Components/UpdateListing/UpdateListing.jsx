import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateListing = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/listings/${id}`)
            .then(res => res.json())
            .then(data => setListing(data));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedListing = {
            title: form.title.value,
            location: form.location.value,
            rent: form.rent.value,
            availability: form.availability.value,
        };

        fetch(`http://localhost:3000/update-listing/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedListing),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate('/listing');
                    });
                }
            })
            .catch(err => {
                console.error("Update error:", err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while updating.",
                    icon: "error"
                });
            });
    };




    if (!listing) {
        return <div>Loading...</div>;
    }



    return (
        <div className="max-w-xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Update Listing</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input name="title" defaultValue={listing.title} className="input input-bordered w-full" required />
                <input name="location" defaultValue={listing.location} className="input input-bordered w-full" required />
                <input name="rent" defaultValue={listing.rent} className="input input-bordered w-full" required type="number" />
                <input name="availability" defaultValue={listing.availability} className="input input-bordered w-full" required />

                <button type="submit" className="btn btn-primary w-full">Update</button>
            </form>
        </div>
    );
};

export default UpdateListing;
