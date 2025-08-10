import React, { useEffect, useState } from 'react';

function Schemes({ onNavigate }) {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/schemes')
      .then(res => res.json())
      .then(data => {
        setSchemes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
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

      {loading ? (
        <p>Loading schemes...</p>
      ) : schemes.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {schemes.map(scheme => (
            <div key={scheme._id} style={{
              padding: '15px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#388E3C' }}>{scheme.title}</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{scheme.summary}</p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#333' }}>No schemes found.</p>
      )}
    </div>
  );
}

export default Schemes;
