import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#menu', label: 'Menu' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <>
      <motion.nav
        className={`pz-nav${scrolled ? ' pz-nav--scrolled' : ''}`}
        initial={{ y: -110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Flame grain overlay */}
        <div className="pz-nav__grain" aria-hidden="true" />

        {/* Top decorative border */}
        <div className="pz-nav__crust-top" aria-hidden="true">
          <svg viewBox="0 0 1440 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,4 Q60,0 120,4 Q180,8 240,4 Q300,0 360,4 Q420,8 480,4 Q540,0 600,4 Q660,8 720,4 Q780,0 840,4 Q900,8 960,4 Q1020,0 1080,4 Q1140,8 1200,4 Q1260,0 1320,4 Q1380,8 1440,4"
              fill="none" stroke="url(#crustGrad)" strokeWidth="2.5" />
            <defs>
              <linearGradient id="crustGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3a1a00" />
                <stop offset="30%" stopColor="#c9893a" />
                <stop offset="60%" stopColor="#e07b39" />
                <stop offset="100%" stopColor="#3a1a00" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="pz-nav__inner">

          {/* ── Logo ── */}
          <a href="#" className="pz-logo">
            <div className="pz-logo__img-wrap">
              <div className="pz-logo__glow" />
              <img
                src="/src/assets/IMG_8773-removebg-preview.png"
                alt="Pizza Oxhaku Logo"
                className="pz-logo__img"
              />
            </div>
            <div className="pz-logo__wordmark">
              <span className="pz-logo__pizza">PIZZA</span>
              <em className="pz-logo__oxhaku">OXHAKU</em>
            </div>
          </a>

          {/* ── Center ornament ── */}
          <div className="pz-nav__ornament" aria-hidden="true">
            <span className="pz-orn-line" />
            <svg className="pz-orn-star" width="22" height="22" viewBox="0 0 40 40">
              <path d="M20 2 L23.5 14.5 L36 14.5 L25.5 22.5 L29 35 L20 27.5 L11 35 L14.5 22.5 L4 14.5 L16.5 14.5 Z"
                fill="#c9893a" opacity="0.85" />
              <circle cx="20" cy="20" r="4" fill="#e8a84a" opacity="0.6" />
            </svg>
            <span className="pz-orn-line" />
          </div>

          {/* ── Desktop links ── */}
          <ul className="pz-links">
            {links.map((l, i) => (
              <li key={l.href}>
                <motion.a
                  href={l.href}
                  className="pz-link"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="pz-link__ember" />
                  <span className="pz-link__label">{l.label}</span>
                  <span className="pz-link__bar" />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* ── Mobile toggle ── */}
          <button
            className="pz-toggle"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={`pz-burger${mobileOpen ? ' pz-burger--open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>

        {/* Bottom decorative border */}
        <div className="pz-nav__crust-bot" aria-hidden="true" />
      </motion.nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="pz-mobile"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pz-mobile__grain" aria-hidden="true" />

            <div className="pz-mobile__brand">
              <span>PIZZA</span>
              <em>OXHAKU</em>
            </div>

            <div className="pz-mobile__rule">
              <span />
              <svg width="14" height="14" viewBox="0 0 20 20">
                <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" fill="#c9893a" />
              </svg>
              <span />
            </div>

            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="pz-mobile__link"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="pz-mobile__num">0{i + 1}</span>
                <span className="pz-mobile__label">{l.label}</span>
                <span className="pz-mobile__arrow">→</span>
              </motion.a>
            ))}

            <div className="pz-mobile__footer">
              <span>✦ Arte &amp; Shije ✦</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;