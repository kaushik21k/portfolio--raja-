import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(() => setLoading(false), 400); return 100; }
        return p + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  if (loading) return (
    <div className="loader">
      <div className="loader-icon">
        <svg viewBox="0 0 100 100" width="64">
          <defs><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00e5c3"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
          <path d="M50 5 L88 19 L88 50 C88 73 70 90 50 97 C30 90 12 73 12 50 L12 19 Z" fill="url(#lg)"/>
          <text x="50" y="62" fontFamily="monospace" fontSize="34" fontWeight="bold" fill="#05050f" textAnchor="middle">R</text>
        </svg>
      </div>
      <p className="loader-label">Initializing Portfolio</p>
      <div className="loader-bar-wrap">
        <div className="loader-bar-fill" style={{width: `${Math.min(progress,100)}%`}} />
      </div>
      <p className="loader-pct">{Math.min(Math.round(progress),100)}%</p>
    </div>
  );

  return (
    <div className="app">
      <MatrixRain />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
