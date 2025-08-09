import React from 'react';

function Schemes({ onNavigate }) {
  return (
    <div style={{ padding: '20px' }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate('home')}
        style={{
          padding: '8px 15px',
          fontSize: '14px',
          border: 'none',
          backgroundColor: '#eee',
          borderRadius: '20px',
          cursor: 'pointer'
        }}>
        &larr; Back
      </button>

      <h1>Government Schemes</h1>
      <p>This is where the list of government schemes will appear.</p>
    </div>
  );
}

export default Schemes;