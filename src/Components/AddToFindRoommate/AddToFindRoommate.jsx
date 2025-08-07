import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AddToFindRoommate = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        rent: '',
        roomType: '',
        lifestyle: '',
        description: '',
        contact: '',
        availability: 'Available'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullData = {
            ...formData,
            userName: user?.displayName,
            userEmail: user?.email
        };

        fetch('https://roommate-found-server.vercel.app/add-listing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fullData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after adding list', data);
                if (data.insertedId) { 
                    Swal.fire({
                        icon: 'success',
                        title: 'Roommate Post Added!',
                        text: `Your listing has been successfully submitted. ID: ${data.insertedId}`,
                    });

                  
                    setFormData({
                        title: '',
                        location: '',
                        rent: '',
                        roomType: '',
                        lifestyle: '',
                        description: '',
                        contact: '',
                        availability: 'Available'
                    });
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Failed to add your listing.',
                    });
                }
            })
            .catch(error => {
                console.error('Error adding listing:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                });
            });
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Add Roommate Listing</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title (e.g. Looking for roommate in Dhaka)"
                    className="input input-bordered w-full"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="input border-2 input-bordered w-full"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="rent"
                    placeholder="Rent (৳)"
                    className="input input-bordered w-full"
                    value={formData.rent}
                    onChange={handleChange}
                    required
                />

                <select
                    name="roomType"
                    className="select select-bordered w-full"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Shared">Shared</option>
                </select>

                <input
                    type="text"
                    name="lifestyle"
                    placeholder="Lifestyle Preferences (e.g. Non-smoker, Pet Friendly)"
                    className="input input-bordered w-full"
                    value={formData.lifestyle}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number"
                    className="input input-bordered w-full"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />

                <select
                    name="availability"
                    className="select select-bordered w-full"
                    value={formData.availability}
                    onChange={handleChange}
                >
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>


                <input
                    type="text"
                    value={user?.displayName}
                    readOnly
                    className="input input-bordered w-full dark:text-black bg-gray-100"
                />

                <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="input dark:text-black input-bordered w-full bg-gray-100"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    className="textarea dark:bg-white dark:text-black textarea-bordered w-full md:col-span-2"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>

                <button
                    type="submit"
                    className="btn btn-primary md:col-span-2 w-full"
                >
                    Add Listing
                </button>
            </form>
        </div>
    );
};

export default AddToFindRoommate;
