import React from 'react';
import { mockSchemes } from './SchemesData';

function Schemes({ onNavigate }) {
  const cardStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };

  return (
    <div>
      <button
        onClick={() => onNavigate('home')}
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          backgroundColor: '#E8F5E9',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← Back
      </button>

      <h1 style={{
        textAlign: 'center',
        margin: '20px 0',
        color: '#2E7D32',
        fontWeight: '600'
      }}>Government Schemes</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {mockSchemes.length > 0 ? (
          mockSchemes.map(scheme => (
            <div key={scheme.id}
              style={cardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              }}
            >
              <h4 style={{ color: '#2E7D32', marginBottom: '8px' }}>
                {scheme.title}
              </h4>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                {scheme.summary}
              </p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#777' }}>No schemes found.</p>
        )}
      </div>
    </div>
  );
}

export default Schemes;
