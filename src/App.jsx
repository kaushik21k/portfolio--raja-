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
      <div className="loader-inner">
        <div className="loader-shield">
          <svg viewBox="0 0 100 100" width="80">
            <defs><linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00f5d4"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
            <path d="M50 5 L90 20 L90 50 C90 75 70 92 50 98 C30 92 10 75 10 50 L10 20 Z" fill="url(#lg)"/>
            <text x="50" y="62" fontFamily="monospace" fontSize="36" fontWeight="bold" fill="#0a0a0f" textAnchor="middle">R</text>
          </svg>
        </div>
        <p className="loader-text">INITIALIZING SECURE CONNECTION...</p>
        <div className="loader-bar"><div className="loader-fill" style={{width: `${Math.min(progress,100)}%`}}/></div>
        <p className="loader-pct">{Math.min(Math.round(progress),100)}%</p>
      </div>
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
