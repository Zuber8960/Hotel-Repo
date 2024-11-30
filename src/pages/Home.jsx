  
import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section>
        <h2>Discover Our Rooms</h2>
        {/* Add RoomCard components */}
      </section>
      <section>
        <h2>Fine Dining</h2>
        {/* Add DiningCard components */}
      </section>
    </div>
  );
};

export default Home;
