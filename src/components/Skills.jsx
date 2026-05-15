import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const categories = [
  {
    title: 'Offensive Security',
    color: '#f72585',
    skills: [
      { name: 'Penetration Testing', level: 80 },
      { name: 'Ethical Hacking', level: 85 },
      { name: 'Vulnerability Assessment', level: 78 },
      { name: 'Social Engineering', level: 70 },
    ]
  },
  {
    title: 'Defensive Security',
    color: '#00f5d4',
    skills: [
      { name: 'Network Monitoring', level: 82 },
      { name: 'SIEM / Log Analysis', level: 75 },
      { name: 'Incident Response', level: 72 },
      { name: 'Firewall & IDS/IPS', level: 78 },
    ]
  },
  {
    title: 'Tools & Technologies',
    color: '#7c3aed',
    skills: [
      { name: 'Kali Linux / Parrot OS', level: 90 },
      { name: 'Wireshark / Nmap', level: 85 },
      { name: 'Metasploit', level: 75 },
      { name: 'Burp Suite', level: 72 },
    ]
  },
  {
    title: 'Programming',
    color: '#ffd166',
    skills: [
      { name: 'Python (Scripting)', level: 80 },
      { name: 'Bash / Shell', level: 78 },
      { name: 'SQL / Databases', level: 70 },
      { name: 'HTML / CSS / JS', level: 75 },
    ]
  },
];

const tools = ['Kali Linux','Wireshark','Nmap','Metasploit','Burp Suite','John the Ripper','Hashcat','SQLmap','Aircrack-ng','Autopsy','Volatility','Ghidra','Python','Bash','Git','VMware'];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="skills-section">
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Skills & Arsenal</h2>
          <div className="section-divider" />
          <p className="section-subtitle">// MY TECHNICAL TOOLKIT</p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title} className="card skill-category"
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}>
              <h3 className="skill-cat-title" style={{ color: cat.color }}>{cat.title}</h3>
              <div className="skill-bars">
                {cat.skills.map((s, si) => (
                  <div key={s.name} className="skill-bar-item">
                    <div className="skill-bar-info">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct" style={{ color: cat.color }}>{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div className="skill-bar-fill"
                        style={{ background: `linear-gradient(90deg, ${cat.color}99, ${cat.color})` }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${s.level}%` } : {}}
                        transition={{ duration: 1, delay: ci * 0.15 + si * 0.1 + 0.4 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="tools-cloud" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 }}>
          <h3 className="tools-title">Tools I Use</h3>
          <div className="tools-list">
            {tools.map((t, i) => (
              <motion.span key={t} className="tool-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.04 }}>
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
