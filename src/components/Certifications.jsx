import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiShield } from 'react-icons/fi';
import './Certifications.css';

const certs = [
  { title: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', date: '2024', status: 'In Progress', color: '#f72585' },
  { title: 'CompTIA Security+', issuer: 'CompTIA', date: '2023', status: 'Completed', color: '#00f5d4' },
  { title: 'Google Cybersecurity Certificate', issuer: 'Google / Coursera', date: '2023', status: 'Completed', color: '#7c3aed' },
  { title: 'Network Security Fundamentals', issuer: 'Cisco NetAcad', date: '2023', status: 'Completed', color: '#ffd166' },
  { title: 'Python for Cybersecurity', issuer: 'Infosec Institute', date: '2022', status: 'Completed', color: '#06d6a0' },
  { title: 'TryHackMe – Top 10%', issuer: 'TryHackMe', date: '2024', status: 'Active', color: '#00b4d8' },
];

const timeline = [
  { year: '2022', event: 'Started B.Sc. Cyber Security', detail: 'Began academic journey in cybersecurity.' },
  { year: '2022', event: 'First CTF Participation', detail: 'Participated in national-level CTF competition.' },
  { year: '2023', event: 'Python for Security Scripting', detail: 'Completed course and built automation tools.' },
  { year: '2023', event: 'Network Security Certified', detail: 'Cisco NetAcad certification achieved.' },
  { year: '2024', event: 'Penetration Testing Lab', detail: 'Built home lab with Kali Linux and vulnerable VMs.' },
  { year: '2024', event: 'CEH Preparation', detail: 'Currently preparing for CEH certification.' },
];

export default function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="cert-section">
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Certifications & Journey</h2>
          <div className="section-divider" />
          <p className="section-subtitle">// ACHIEVEMENTS & MILESTONES</p>
        </motion.div>

        <div className="cert-layout">
          <div className="cert-grid">
            {certs.map((c, i) => (
              <motion.div key={c.title} className="cert-card card"
                style={{ '--c': c.color }}
                initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="cert-top">
                  <div className="cert-icon" style={{ color: c.color, background: `${c.color}15` }}>
                    <FiAward />
                  </div>
                  <span className={`cert-status ${c.status === 'Completed' ? 'done' : c.status === 'Active' ? 'active' : 'progress'}`}>
                    {c.status}
                  </span>
                </div>
                <h3 className="cert-title">{c.title}</h3>
                <div className="cert-meta">
                  <span><FiShield /> {c.issuer}</span>
                  <span><FiCalendar /> {c.date}</span>
                </div>
                <div className="cert-accent-bar" style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />
              </motion.div>
            ))}
          </div>

          <div className="timeline-container">
            <h3 className="timeline-heading">My Journey</h3>
            <div className="timeline">
              {timeline.map((t, i) => (
                <motion.div key={i} className="timeline-item"
                  initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}>
                  <div className="tl-dot" />
                  <div className="tl-content">
                    <span className="tl-year">{t.year}</span>
                    <h4 className="tl-event">{t.event}</h4>
                    <p className="tl-detail">{t.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
