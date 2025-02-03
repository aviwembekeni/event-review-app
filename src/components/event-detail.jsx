import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
};

export default EventDetail;