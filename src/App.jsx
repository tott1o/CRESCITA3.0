import React from 'react';
import Navbar from './components/Navbar';
import EarlyBirdPopup from './components/EarlyBirdPopup';
import PromoPopup from './components/PromoPopup';
import Hero from './components/Hero';
import About from './components/About';
import EventsPreview from './components/EventsPreview';
import LegacyGallery from './components/LegacyGallery';
import MediaPreview from './components/MediaPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import PostersGallery from './components/PostersGallery';

const Home = () => (
  <>
    <Hero />
    <About />
    <MediaPreview />
    <EventsPreview />
    <LegacyGallery />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <PromoPopup />
      <EarlyBirdPopup />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posters" element={<PostersGallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
