import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiShield, FiWifi, FiLock, FiSearch, FiAlertTriangle, FiDatabase, FiUsers } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 'p1',
    title: 'Crowd Management System',
    desc: 'An automated crowd management system with real-time zone capacity monitoring, QR-based entry verification, and administrative alerting.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind'],
    icon: <FiUsers />,
    color: '#00f5d4',
    github: 'https://github.com/kaushik21k/crowd-management',
    live: 'https://crowd-management-lyart.vercel.app',
    category: 'Full Stack',
  }
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
                  <FiExternalLink /> Live Tracking
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
