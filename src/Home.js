import React from 'react';

function Home({ onNavigate }) {
  const buttonStyle = {
    padding: '18px 35px',
    fontSize: '18px',
    margin: '15px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{ color: '#2E7D32', fontWeight: '600' }}>
        Hello, Farmer! How can I help you today?
      </h3>
      <div style={{ marginTop: '50px' }}>
        <button
          onClick={() => onNavigate('chat')}
          style={{
            ...buttonStyle,
            backgroundColor: '#FFFFFF',
            color: '#2E7D32',
            border: '2px solid #2E7D32'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#E8F5E9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FFFFFF'}
        >
          🤖 Ask AI
        </button>

        <button
          onClick={() => onNavigate('schemes')}
          style={{
            ...buttonStyle,
            background: 'linear-gradient(90deg, #2E7D32, #66BB6A)',
            color: '#FFFFFF'
          }}
          onMouseOver={(e) => e.target.style.opacity = '0.9'}
          onMouseOut={(e) => e.target.style.opacity = '1'}
        >
          📜 Schemes Near Me
        </button>
      </div>
    </div>
  );
}

export default Home;
