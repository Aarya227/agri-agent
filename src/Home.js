import React from 'react';

function Home({ onNavigate }) { // <-- Are the curly braces here?
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Multi-Domain Agricultural Agent</h1>
      <p>Hello, Farmer! How can I help you today?</p>
      <div style={{ marginTop: '50px' }}>
        <button
          onClick={() => onNavigate('chat')} // <-- Is 'chat' in quotes?
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}>
          Ask AI
        </button>
        <button
          onClick={() => onNavigate('schemes')} // <-- Is 'schemes' in quotes?
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}>
          Schemes Near Me
        </button>
      </div>
    </div>
  );
}

export default Home;