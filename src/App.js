import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Chat from './Chat';
import Schemes from './Schemes';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={navigateTo} />;
    } else if (currentPage === 'chat') {
      return <Chat onNavigate={navigateTo} />; // <-- FIX HERE
    } else if (currentPage === 'schemes') {
      return <Schemes onNavigate={navigateTo} />; // <-- FIX HERE
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;