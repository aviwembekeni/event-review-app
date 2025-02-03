
const HomePage = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/events')
        .then(response => setEvents(response.data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map(event => (
            <div key={event.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HomePage;