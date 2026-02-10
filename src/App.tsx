import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh' }}>
      <iframe
        title="Typeform"
        src="https://form.typeform.com/to/Q2GcxtHr"
        style={{ width: '100%', height: '100vh', border: '0' }}
        allow="camera; microphone; autoplay; encrypted-media;"
      />
    </div>
  );
}

export default App;
