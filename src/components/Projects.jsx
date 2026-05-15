import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiShield, FiWifi, FiLock, FiSearch, FiAlertTriangle, FiDatabase } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 'p1',
    title: 'Network Intrusion Detection',
    desc: 'ML-based IDS using Python and Scikit-learn to detect network anomalies and intrusions in real-time traffic analysis.',
    tags: ['Python', 'ML', 'Wireshark', 'Scikit-learn'],
    icon: <FiWifi />,
    color: '#00f5d4',
    github: '#',
    live: '#',
    category: 'ML Security',
  },
  {
    id: 'p2',
    title: 'Password Strength Analyzer',
    desc: 'A comprehensive tool to analyze password strength, entropy, and susceptibility to dictionary or brute-force attacks.',
    tags: ['Python', 'Cryptography', 'CLI'],
    icon: <FiLock />,
    color: '#7c3aed',
    github: '#',
    live: '#',
    category: 'Crypto',
  },
  {
    id: 'p3',
    title: 'Vulnerability Scanner',
    desc: 'Automated web vulnerability scanner detecting SQL injection, XSS, and CSRF flaws in web applications.',
    tags: ['Python', 'Requests', 'BeautifulSoup', 'Web'],
    icon: <FiSearch />,
    color: '#f72585',
    github: '#',
    live: '#',
    category: 'Web Security',
  },
  {
    id: 'p4',
    title: 'Phishing Detection System',
    desc: 'Browser-based extension using NLP and URL analysis to identify and flag phishing websites in real-time.',
    tags: ['Python', 'NLP', 'Browser Extension'],
    icon: <FiAlertTriangle />,
    color: '#ffd166',
    github: '#',
    live: '#',
    category: 'Anti-Phishing',
  },
  {
    id: 'p5',
    title: 'Secure File Encryption',
    desc: 'AES-256 based file encryption/decryption tool with key management and digital signature verification.',
    tags: ['Python', 'AES-256', 'Cryptography'],
    icon: <FiDatabase />,
    color: '#00b4d8',
    github: '#',
    live: '#',
    category: 'Crypto',
  },
  {
    id: 'p6',
    title: 'CTF Writeup Platform',
    desc: 'Personal CTF solution blog documenting techniques for pwn, reversing, crypto, and web challenges.',
    tags: ['CTF', 'Python', 'Reverse Engineering'],
    icon: <FiShield />,
    color: '#06d6a0',
    github: '#',
    live: '#',
    category: 'CTF',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="section-header">
            <span className="section-label">Work</span>
            <h2 className="section-title">Featured <span>Projects</span></h2>
            <p className="section-desc">Real security tools and research I've built from the ground up.</p>
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={p.id} className="project-card"
              style={{ '--accent': p.color }}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
              <div className="project-header">
                <div className="project-icon" style={{ color: p.color, background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                  {p.icon}
                </div>
                <span className="project-category" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}10` }}>
                  {p.category}
                </span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">
                  <FiGithub /> Code
                </a>
                <a href={p.live} className="proj-link live" target="_blank" rel="noreferrer">
                  <FiExternalLink /> Demo
                </a>
              </div>
              <div className="project-glow" style={{ background: `radial-gradient(circle at center, ${p.color}20, transparent 70%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
