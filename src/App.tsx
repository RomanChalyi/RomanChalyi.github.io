import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookPage } from './LivingBook';
import './App.css';

function FormPage() {
  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '40px auto',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
        backgroundColor: '#ffffff',
      }}
    >
      <h1 style={{ marginBottom: '16px', textAlign: 'center' }}>Contact form</h1>
      <p style={{ marginBottom: '24px', textAlign: 'center', color: '#555' }}>
        Please fill out the form below.
      </p>
      <div style={{ height: '70vh' }}>
        <iframe
          title="Typeform"
          src="https://form.typeform.com/to/Q2GcxtHr"
          style={{ width: '100%', height: '100%', border: '0' }}
          allow="camera; microphone; autoplay; encrypted-media;"
        />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>About</h1>
      <p>This is a simple site with a Typeform-powered contact form.</p>
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f5f5f7' }}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 24px',
            backgroundColor: '#111827',
            color: '#ffffff',
          }}
        >
          <span style={{ fontWeight: 600 }}>Roman Chalyi</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/" style={{ color: '#e5e7eb', textDecoration: 'none' }}>
              Form
            </Link>
            <Link to="/living-book" style={{ color: '#e5e7eb', textDecoration: 'none' }}>
              Living Book
            </Link>
            <Link to="/about" style={{ color: '#e5e7eb', textDecoration: 'none' }}>
              About
            </Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/living-book" element={<BookPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
