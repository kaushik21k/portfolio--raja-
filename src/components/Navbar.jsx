import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiShield, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const links = ['home','about','skills','projects','certifications','contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <FiShield className="nav-logo-icon" />
        <span>Raja<span className="accent">kumar</span></span>
      </div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <Link to={l} spy smooth duration={600} offset={-70}
              activeClass="active" onSetActive={() => setActive(l)}
              onClick={() => setOpen(false)}
              className={`nav-link ${active === l ? 'active' : ''}`}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}
