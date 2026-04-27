import React from 'react';
import { Phone, MapPin, Clock, Globe } from 'lucide-react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="ft-footer">

      {/* Grain */}
      <div className="ft-grain" aria-hidden="true" />

      {/* Top ornament rule */}
      <div className="ft-top-rule" />

      <div className="ft-container">

        {/* ══ Main grid ══ */}
        <div className="ft-grid">

          {/* ── Col 1: Brand ── */}
          <div className="ft-col ft-col--brand">
            <div className="ft-logo">
              <div className="ft-logo__img-wrap">
                <img src="/src/assets/IMG_8773-removebg-preview.png" alt="Pizza Oxhaku Logo" className="ft-logo__img" />
              </div>
              <div className="ft-logo__text">
                PIZZA<em>OXHAKU</em>
              </div>
            </div>

            <p className="ft-brand-desc">
              Pjekja e përsosur, shija autentike dhe stili luksoz bashkohen në çdo fetë pice që ne përgatisim me pasion.
            </p>

            <div className="ft-orn">
              <span className="ft-orn__line" />
              <span className="ft-orn__diamond" />
              <span className="ft-orn__line ft-orn__line--short" />
            </div>

            <div className="ft-social">
              <a href="#" className="ft-social__btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="ft-social__btn" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="ft-social__btn" aria-label="Website">
                <Globe size={14} />
              </a>
            </div>
          </div>

          {/* ── Col 2: Kontakt ── */}
          <div className="ft-col">
            <div className="ft-col__eyebrow">
              <span className="ft-col__eyebrow-line" />
              Na Gjeni
            </div>

            <ul className="ft-info-list">
              <li className="ft-info-item">
                <span className="ft-info-icon"><Phone size={12} /></span>
                <div className="ft-info-body">
                  <span className="ft-info-label">Telefon</span>
                  <span className="ft-info-value">+355 69 00 00 000</span>
                </div>
              </li>
              <li className="ft-info-item">
                <span className="ft-info-icon"><MapPin size={12} /></span>
                <div className="ft-info-body">
                  <span className="ft-info-label">Adresa</span>
                  <span className="ft-info-value">Rruga Zihni Sako, Tirane</span>
                </div>
              </li>
              <li className="ft-info-item">
                <span className="ft-info-icon"><Clock size={12} /></span>
                <div className="ft-info-body">
                  <span className="ft-info-label">E Hapur</span>
                  <span className="ft-info-value">08:00 — 00:00 · Çdo Ditë</span>
                </div>
              </li>
            </ul>
          </div> {/* Closes ft-grid */}

          {/* ══ Divider ══ */}
          <div className="ft-mid-rule">
            <span className="ft-mid-rule__line" />
            <span className="ft-mid-rule__diamond" />
            <span className="ft-mid-rule__line" />
          </div>

          {/* ══ Bottom bar ══ */}
          <div className="ft-bottom">
            <span className="ft-bottom__copy">
              &copy; {new Date().getFullYear()} PIZZA OXHAKU · Luxury Dining
            </span>
            <span className="ft-bottom__tag">
              <em>Fatto con amore</em> — Bërë me Dashuri
            </span>
            <span className="ft-bottom__loc">
              Tiranë, Shqipëri
            </span>
          </div>

        </div>

        {/* Large bg word */}
        <div className="ft-bg-word" aria-hidden="true">OXHAKU</div>

      </div>

    </footer>
  );
};

export default Footer;