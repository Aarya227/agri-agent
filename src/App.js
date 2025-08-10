import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Chat from './Chat';
import Schemes from './Schemes';

// Header component
const Header = () => (
  <header style={{
    backgroundColor: '#388E3C', // Dark Green
    color: 'white',
    padding: '15px 20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <h2>Multi-Domain Agricultural Agent</h2>
  </header>
);

// Footer component
const Footer = () => (
  <footer style={{
    backgroundColor: '#388E3C', // Dark Green
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
  }}>
    <p style={{ margin: 0, fontSize: '12px' }}>
      &copy; 2025 Multi-Domain Agri-Agent. All Rights Reserved.
    </p>
  </footer>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={navigateTo} />;
    } else if (currentPage === 'chat') {
      return <Chat onNavigate={navigateTo} onSpeak={speak} />;
    } else if (currentPage === 'schemes') {
      return <Schemes onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', color: '#333333' }}>
      <Header />
      <main style={{ padding: '20px', paddingBottom: '60px' }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

// Speak function
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

export default App;