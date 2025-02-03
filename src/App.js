import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventDetail from './components/EventDetail';
import UserProfile from './components/UserProfile';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/calendar" element={<CalendarView />} />
      </Routes>
    </Router>
  );
}

export default App;