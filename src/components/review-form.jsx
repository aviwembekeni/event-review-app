import React, { useState } from 'react';

const ReviewForm = ({ eventId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review to backend
    console.log({ eventId, review, rating });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-2 border rounded-lg"
        rows="4"
      />
      <div className="mt-2">
        <label className="block text-gray-700">Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          className="p-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;