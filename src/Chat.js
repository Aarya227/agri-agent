import React from 'react';

function Chat({ onNavigate }) {
  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#f9f9f9'
    }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        style={{
          padding: '8px 15px',
          fontSize: '14px',
          border: 'none',
          backgroundColor: '#eee',
          borderRadius: '20px',
          cursor: 'pointer',
          alignSelf: 'flex-start'
        }}>
        &larr; Back
      </button>

      {/* Chat History Area */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '20px' }}>
        <p style={{ textAlign: 'center', color: '#888' }}>
          Ask me about schemes, weather, or crops!
        </p>
      </div>

      {/* Input and Send Button Area */}
      <div style={{ display: 'flex', padding: '10px', borderTop: '1px solid #ccc', backgroundColor: '#fff' }}>
        <input
          type="text"
          placeholder="Type your question here..."
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '20px'
          }}
        />
        <button
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer'
          }}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;