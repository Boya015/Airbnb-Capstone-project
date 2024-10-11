import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdatePage = () => {
  const { id } = useParams(); // Get the hotel ID from the URL
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/accommodations/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHotel(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Implement the update logic here (e.g., send PUT request to update hotel)
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Update Hotel</h2>
      <form onSubmit={handleUpdate}>
        {/* Render input fields to edit hotel details here */}
        <input type="text" defaultValue={hotel.name} />
        {/* Other fields for details, price, etc. */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePage;
