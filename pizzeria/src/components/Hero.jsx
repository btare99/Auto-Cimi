import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.4}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hz-hero">
      <div className="hz-grain" aria-hidden="true" />
      <div className="hz-glow" aria-hidden="true" />
      <div className="hz-bg-word" aria-hidden="true">PIZZA</div>

      <div className="hz-container">
        <div className="hz-layout">
          <div className="hz-content">
            <motion.div
              className="hz-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hz-eyebrow__line" />
              <span className="hz-eyebrow__text">Since 1994</span>
              <span className="hz-eyebrow__diamond" />
              <span className="hz-eyebrow__text">Artisanal Quality</span>
            </motion.div>

            <div className="hz-title-wrap">
              <motion.h1
                className="hz-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="hz-title__line">Shija</span>
                <em className="hz-title__line hz-title__line--gold">Që</em>
                <span className="hz-title__line">Mbizotëron</span>
              </motion.h1>
            </div>

            <motion.div
              className="hz-orn"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hz-orn__line" />
              <span className="hz-orn__diamond" />
              <span className="hz-orn__line hz-orn__line--short" />
            </motion.div>

            <motion.p
              className="hz-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.9 }}
            >
              Zbuloni artin e picës moderne të pjekur në zjarr druri.
              Përbërësit më të mirë italianë në tavolinën tuaj.
            </motion.p>

            <motion.div
              className="hz-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              style={{ borderTop: 'none', paddingTop: 0 }}
            >
              {[
                { num: '30+', label: 'Vite Traditë' },
                { num: '18', label: 'Receta Unike' },
                { num: '4.9', label: 'Vlerësim Mesatar' },
              ].map((s, i) => (
                <div className="hz-stat" key={i}>
                  {i > 0 && <span className="hz-stat__sep" />}
                  <span className="hz-stat__num">{s.num}</span>
                  <span className="hz-stat__label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hz-visual">
            <motion.div
              className="hz-ring"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <svg className="hz-ring__svg" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="190" stroke="rgba(201,137,58,0.12)" strokeWidth="1" />
                <circle cx="200" cy="200" r="160" stroke="rgba(201,137,58,0.07)" strokeWidth="1" strokeDasharray="4 6" />
              </svg>
            </motion.div>

            <motion.div
              className="hz-pizza-wrap"
              ref={parallaxRef}
              initial={{ opacity: 0, scale: 0.75, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Pizza"
                className="hz-pizza-img"
              />
              <div className="hz-pizza-shadow" />
            </motion.div>

            <motion.div
              className="hz-badge"
              initial={{ opacity: 0, scale: 0.7, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="hz-badge__num">№1</span>
              <span className="hz-badge__text">Në Tiranë</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hz-bottom-rule" />
    </section>
  );
};

export default Hero;