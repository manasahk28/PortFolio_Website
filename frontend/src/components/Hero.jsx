import { motion } from 'framer-motion';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="highlight">Manasa</span>
      </motion.h1>
      <p>Aspiring AI/ML Engineer | UI Designer</p>
      <div className="hero-buttons">
        <a href="/resume.pdf" className="btn">Resume</a>
        <a href="#contact" className="btn secondary">Contact</a>
      </div>
    </section>
  );
}
