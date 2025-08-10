import React from 'react';

function Home({ onNavigate }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: '#333333' }}>Hello, Farmer! How can I help you today?</h3>
      <div style={{ marginTop: '50px' }}>
        <button
          onClick={() => onNavigate('chat')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #4CAF50',
            backgroundColor: 'white',
            color: '#4CAF50',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
          Ask AI
        </button>
        <button
          onClick={() => onNavigate('schemes')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#2196F3', // Accent Blue
            color: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
          Schemes Near Me
        </button>
      </div>
    </div>
  );
}

export default Home;