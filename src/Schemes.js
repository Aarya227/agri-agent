import React from 'react';
import { mockSchemes } from './SchemesData';

function Schemes({ onNavigate }) {
  const schemes = mockSchemes;

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

      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333333' }}>Government Schemes</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {schemes.length > 0 ? (
          schemes.map(scheme => (
            <div key={scheme.id} style={{
              padding: '15px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#388E3C' }}>{scheme.title}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{scheme.summary}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#333' }}>No schemes found.</p>
        )}
      </div>
    </div>
  );
}

export default Schemes;