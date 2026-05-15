import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const orbRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-orbs">
        <div className="orb orb1" ref={orbRef} />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      <div className="hero-content">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
          <p className="hero-greeting">
            <span className="mono-tag">&lt;</span>
            Hello, World!
            <span className="mono-tag">/&gt;</span>
          </p>
        </motion.div>

        <motion.h1 className="hero-name" initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.2}}>
          Rajakumar
        </motion.h1>

        <motion.div className="hero-role" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.4}}>
          <TypeAnimation
            sequence={[
              'Cybersecurity Student', 2000,
              'Ethical Hacker', 2000,
              'Network Defender', 2000,
              'Penetration Tester', 2000,
              'CTF Player', 2000,
              'Security Researcher', 2000,
            ]}
            wrapper="span" cursor={true} repeat={Infinity}
          />
        </motion.div>

        <motion.p className="hero-desc" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7,delay:0.6}}>
          3rd Year B.Sc. Cyber Security student passionate about protecting digital landscapes, 
          uncovering vulnerabilities, and building secure systems. Currently diving deep into 
          <span className="highlight"> ethical hacking</span>, <span className="highlight"> network forensics</span>, and <span className="highlight"> cryptography</span>.
        </motion.p>

        <motion.div className="hero-cta" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.8}}>
          <Link to="contact" smooth duration={600} offset={-70}>
            <button className="glow-btn primary"><FiMail /> Get In Touch</button>
          </Link>
          <Link to="projects" smooth duration={600} offset={-70}>
            <button className="glow-btn outline">View Projects</button>
          </Link>
        </motion.div>

        <motion.div className="hero-socials" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.7,delay:1}}>
          {[
            {icon:<FiGithub/>, href:'https://github.com/', label:'GitHub'},
            {icon:<FiLinkedin/>, href:'https://linkedin.com/', label:'LinkedIn'},
            {icon:<FiTwitter/>, href:'https://twitter.com/', label:'Twitter'},
            {icon:<FiMail/>, href:'mailto:urajakumar0603@gmail.com', label:'Email'},
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link" title={s.label}>
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div className="hero-visual" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.9,delay:0.3}}>
        <div className="shield-container">
          <div className="shield-glow" />
          <div className="shield-ring ring1" />
          <div className="shield-ring ring2" />
          <div className="shield-ring ring3" />
          <div className="shield-icon">
            <svg viewBox="0 0 100 100" width="130">
              <defs>
                <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f5d4"/>
                  <stop offset="100%" stopColor="#7c3aed"/>
                </linearGradient>
              </defs>
              <path d="M50 5 L90 20 L90 50 C90 75 70 92 50 98 C30 92 10 75 10 50 L10 20 Z" fill="url(#sg)" opacity="0.9"/>
              <text x="50" y="62" fontFamily="monospace" fontSize="38" fontWeight="bold" fill="#0a0a0f" textAnchor="middle">R</text>
            </svg>
          </div>
          <div className="orbit-dot dot1" />
          <div className="orbit-dot dot2" />
          <div className="orbit-dot dot3" />
        </div>
        <div className="hero-stats">
          {[
            {val:'3rd',label:'Year'},
            {val:'10+',label:'Projects'},
            {val:'5+',label:'Certs'},
            {val:'CTF',label:'Player'},
          ].map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-val">{s.val}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
