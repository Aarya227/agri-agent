import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Chat from './Chat';
import Schemes from './Schemes';

// Header Component
const Header = () => (
  <header style={{
    background: 'linear-gradient(90deg, #2E7D32, #66BB6A)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: "'Poppins', sans-serif"
  }}>
    <h2 style={{ margin: 0, fontWeight: '600', letterSpacing: '0.5px' }}>
      🌾 Multi-Domain Agricultural Agent
    </h2>
  </header>
);

// Footer Component
const Footer = () => (
  <footer style={{
    background: '#2E7D32',
    color: 'white',
    padding: '12px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    fontSize: '13px',
    fontFamily: "'Poppins', sans-serif"
  }}>
    © 2025 Multi-Domain Agri-Agent. All Rights Reserved.
  </footer>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'chat': return <Chat onNavigate={navigateTo} onSpeak={speak} />;
      case 'schemes': return <Schemes onNavigate={navigateTo} />;
      default: return null;
    }
  };

  return (
    <div style={{
      backgroundColor: '#F4F6F6',
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif",
      color: '#333'
    }}>
      <Header />
      <main style={{ padding: '25px', paddingBottom: '70px' }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Speak Function
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

export default App;
