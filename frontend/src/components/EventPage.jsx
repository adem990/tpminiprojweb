import React from 'react';
import Hero from './Hero';
import AboutSection from './AboutSection';
import Footer from './Footer';
import EventDiscovery from './EventDiscovery';
import Header from './Header';


const EventPage = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />
      <Hero />
      <EventDiscovery />  
      <AboutSection />
      <Footer />
    </div>
  );
};

export default EventPage;

