import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';
import Event from './components/event/Event.jsx'; 
import { Routes, Route } from "react-router-dom";
import './App.css';
import Contactus from './components/contactus/Contactus.jsx';
import Aboutus from './components/Aboutus.jsx';
import Mhandi from './components/moreEvents/Mhandi.jsx';
import SoundSystem from './components/moreEvents/DJ/SoundSystem.jsx';
import Birthday from './components/moreEvents/Birthday.jsx';
import Lighting from './components/moreEvents/Lighting.jsx';
import Barat from './components/moreEvents/Barat.jsx';
import Walima from './components/moreEvents/Walima.jsx';
import Photography from './components/moreEvents/Photography.jsx';
import PrivacyPolicy from './components/legal/PrivacyPolicy.jsx';
import TermsConditions from './components/legal/TermsConditions.jsx';
import DigitalCards from './components/digitalCards/DigitalCards.jsx';
function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/mhandi" element={<Mhandi />} />
          <Route path="/soundsystem" element={<SoundSystem />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/barat" element={<Barat />} />
          <Route path="/walima" element={<Walima />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/digital-cards" element={<DigitalCards />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
