import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const ListDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch listing details from backend
  useEffect(() => {
    setLoading(true);
    fetch(`https://roommate-found-server.vercel.app/listings/${id}`)
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

  // Handle Like click
  const handleLike = () => {
    if (!user || listing.userEmail === user.email || listing.likedUsers?.includes(user.email)) {
      return; // silently ignore
    }

    // Optimistic UI update
    setListing(prev => ({
      ...prev,
      likeCount: prev.likeCount + 1,
      likedUsers: [...(prev.likedUsers || []), user.email]
    }));

    fetch(`https://roommate-found-server.vercel.app/listings/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to like');
        return res.json();
      })
      .then(data => {
        setListing(data); // backend updated data
      })
      .catch(() => {
        // rollback UI if failed
        setListing(prev => ({
          ...prev,
          likeCount: prev.likeCount - 1,
          likedUsers: prev.likedUsers.filter(email => email !== user.email)
        }));
      });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!listing) return <p className="text-center mt-10 text-red-500">Listing not found.</p>;

  const isOwner = listing.userEmail === user?.email;
  const hasLiked = listing.likedUsers?.includes(user?.email);
  const notLoggedIn = !user;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-secondary mb-4">{listing.title}</h2>
      <p><strong>Location:</strong> {listing.location}</p>
      <p><strong>Rent:</strong> ৳{listing.rent}</p>
      <p><strong>Room Type:</strong> {listing.roomType}</p>
      <p><strong>Lifestyle:</strong> {listing.lifestyle}</p>
      <p><strong>Availability:</strong> {listing.availability}</p>
      <p className="my-2"><strong>Description:</strong> {listing.description}</p>

      {/* Like Count */}
      <p className="mt-6 text-lg font-semibold text-purple-600">
        {listing.likeCount || 0} people interested in
      </p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={isOwner || hasLiked || notLoggedIn}
        className="btn btn-primary mt-2"
      >
        {notLoggedIn
          ? 'Login to Like'
          : isOwner
          ? 'Your Post'
          : hasLiked
          ? 'Liked'
          : 'Like'}
      </button>

      {/* Contact only after like */}
      {hasLiked && (
        <p className="mt-4 text-green-600 font-semibold">
          <strong>Contact:</strong> {listing.contact}
        </p>
      )}

      {/* Posted By */}
      <p className="mt-6 text-sm text-gray-400 italic">
        Posted by <span className="font-semibold">{listing.userName}</span> ({listing.userEmail})
      </p>
    </div>
  );
};

export default ListDetails;
