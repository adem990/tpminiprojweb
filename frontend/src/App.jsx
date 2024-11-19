import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventPage from './components/EventPage';
import EventPage2 from './components/eventpage2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/EventPage2" element={<EventPage2 />} />
        {/* Add more routes here if you have additional pages */}
      </Routes>
    </Router>
  );
};

export default App;