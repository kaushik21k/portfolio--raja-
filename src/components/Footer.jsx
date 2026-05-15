import { FiShield, FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <FiShield className="footer-logo-icon" />
          <span>Raja<span className="accent">kumar</span></span>
        </div>
        <p className="footer-tagline">
          Securing the Digital Future — One Line of Code at a Time
        </p>
        <div className="footer-socials">
          {[
            { icon: <FiGithub />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <FiLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
            { icon: <FiMail />, href: 'mailto:urajakumar0603@gmail.com', label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} className="footer-social" target="_blank" rel="noreferrer" title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
        <div className="footer-divider" />
        <p className="footer-copy">
          © {new Date().getFullYear()} Rajakumar. Made with <FiHeart className="heart" /> in Tamil Nadu, India
        </p>
        <p className="footer-email">
          <FiMail /> <a href="mailto:urajakumar0603@gmail.com">urajakumar0603@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}
