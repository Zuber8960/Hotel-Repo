import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Dining from './pages/Dining';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Attractions from './pages/Attractions';
import Reviews from './pages/Reviews';
// Import other pages

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Add other routes */}
      </Routes>
      
      <Footer />
    </Router>
  );
};



export default App;
