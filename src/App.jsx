import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventsPreview from './components/EventsPreview';
import LegacyGallery from './components/LegacyGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EventsPreview />
        <LegacyGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
