import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiBook, FiTarget, FiAward } from 'react-icons/fi';
import './About.css';

const facts = [
  { icon: <FiUser />, title: 'About Me', text: "I'm Rajakumar, a passionate 3rd year Cyber Security student committed to making the digital world safer. I thrive on solving complex security challenges." },
  { icon: <FiBook />, title: 'Education', text: 'B.Sc. Cyber Security — 3rd Year. Studying network security, cryptography, ethical hacking, and digital forensics.' },
  { icon: <FiTarget />, title: 'Focus Areas', text: 'Penetration testing, vulnerability assessment, network monitoring, SIEM tools, and incident response.' },
  { icon: <FiAward />, title: 'Goal', text: 'To become a certified security professional and contribute to enterprise-level security operations and threat intelligence.' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
          <p className="section-subtitle">// WHO AM I</p>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-terminal" initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="terminal-header">
              <div className="term-btn red" /><div className="term-btn yellow" /><div className="term-btn green" />
              <span className="term-title">rajakumar@kali:~$</span>
            </div>
            <div className="terminal-body">
              <p><span className="cmd">whoami</span></p>
              <p className="out">rajakumar — cybersecurity_student</p>
              <p><span className="cmd">cat profile.txt</span></p>
              <div className="out profile-out">
                <p><span className="key">Name     :</span> Rajakumar</p>
                <p><span className="key">Year     :</span> 3rd Year (B.Sc. Cyber Security)</p>
                <p><span className="key">Location :</span> Tamil Nadu, India</p>
                <p><span className="key">Email    :</span> urajakumar0603@gmail.com</p>
                <p><span className="key">Status   :</span> <span style={{color:'#00f5d4'}}>Open to Internships ✓</span></p>
                <p><span className="key">Passion  :</span> Ethical Hacking, CTF</p>
              </div>
              <p><span className="cmd">nmap --skills</span></p>
              <p className="out">Scanning skills... <span className="blink-cursor">█</span></p>
            </div>
          </motion.div>

          <div className="about-cards">
            {facts.map((f, i) => (
              <motion.div key={f.title} className="card about-card"
                initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}>
                <div className="about-card-icon">{f.icon}</div>
                <div>
                  <h3 className="about-card-title">{f.title}</h3>
                  <p className="about-card-text">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
