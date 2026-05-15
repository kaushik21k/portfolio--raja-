import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      // EmailJS integration — replace with your actual service/template/public key
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
          to_email: 'urajakumar0603@gmail.com',
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // Fallback: open mail client
      const mailtoLink = `mailto:urajakumar0603@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p className="section-subtitle">// CONTACT & FEEDBACK</p>
        </motion.div>

        <div className="contact-layout">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              Whether you want to discuss cybersecurity, collaborate on a project, 
              offer an internship, or just say hello — my inbox is always open!
            </p>
            <div className="contact-details">
              {[
                { icon: <FiMail />, label: 'Email', value: 'urajakumar0603@gmail.com', href: 'mailto:urajakumar0603@gmail.com' },
                { icon: <FiMapPin />, label: 'Location', value: 'Tamil Nadu, India', href: null },
                { icon: <FiPhone />, label: 'Availability', value: 'Mon – Sat, 9AM – 8PM IST', href: null },
              ].map(d => (
                <div key={d.label} className="contact-detail-item">
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div>
                    <span className="contact-detail-label">{d.label}</span>
                    {d.href
                      ? <a href={d.href} className="contact-detail-value link">{d.value}</a>
                      : <p className="contact-detail-value">{d.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-box">
              <div className="contact-box-header">
                <div className="term-btn red"/><div className="term-btn yellow"/><div className="term-btn green"/>
              </div>
              <div className="contact-box-body">
                <p><span style={{color:'#7c3aed'}}>$</span> <span style={{color:'#00f5d4'}}>ping</span> rajakumar</p>
                <p style={{color:'#94a3b8', marginTop:'0.4rem'}}>PONG! Ready to connect.</p>
                <p style={{color:'#94a3b8'}}>Response time: &lt; 24 hours</p>
                <p style={{color:'#00f5d4', marginTop:'0.4rem'}}>Status: <span style={{color:'#06d6a0'}}>●</span> Online</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <h3 className="form-title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name"><FiUser /> Your Name</label>
                  <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><FiMail /> Your Email</label>
                  <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject"><FiMessageSquare /> Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Internship / Collaboration / Feedback" value={form.subject} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="message"><FiMessageSquare /> Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Hi Rajakumar, I'd love to discuss..." value={form.message} onChange={handleChange} required />
              </div>

              {status === 'success' && (
                <div className="form-alert success">
                  <FiCheckCircle /> Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="form-alert error">
                  <FiAlertCircle /> Something went wrong. Try emailing directly.
                </div>
              )}

              <button type="submit" className="glow-btn primary submit-btn" disabled={status === 'sending'} id="submit-contact">
                {status === 'sending' ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
