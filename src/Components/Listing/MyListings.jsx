import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const MyListings = () => {
  const { user, loading } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user?.email) {
      navigate('/login');
      return;
    }

    fetch(`http://localhost:3000/my-listings?email=${user.email}`)
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error(err));
  }, [user, loading, navigate]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this listing?');
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/delete-listing/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          alert('Listing deleted successfully');
          setListings(prev => prev.filter(listing => listing._id !== id));
        }
      })
      .catch(err => console.error(err));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-primary">My Listings</h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">No listings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Rent (৳)</th>
                <th>Availability</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map(listing => (
                <tr key={listing._id}>
                  <td className="font-semibold">{listing.title}</td>
                  <td>{listing.location}</td>
                  <td>{listing.rent}</td>
                  <td>{listing.availability}</td>
                  <td className="flex justify-center gap-3">
                    <button
                      onClick={() => navigate(`/update-listing/${listing._id}`)}
                      className="btn btn-sm btn-outline btn-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;