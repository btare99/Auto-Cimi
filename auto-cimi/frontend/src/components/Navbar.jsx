import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo-white.png';
import './Navbar.css';

export default function Navbar() {
  const { totalCount, setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: 'Kryefaqja' },
    { to: '/pjeset', label: 'Pjesët' },
    { to: '/rreth-nesh', label: 'Rreth Nesh' },
    { to: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* ── Logo ── */}
          <Link to="/" className="nav-logo-link">
            <div className="nav-logo-icon">
              <img src={logo} alt="Autocimi Logo" />
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">AUTOCIMI</span>
              <span className="nav-logo-sub">Pjese Franceze</span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="nav-links">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}
              >
                <span className="nav-link-label">{l.label}</span>
                <span className="nav-link-line" />
              </Link>
            ))}
          </div>

          {/* ── Actions ── */}
          <div className="nav-actions">
            <button
              id="cart-open-btn"
              className="nav-cart-btn"
              onClick={() => setCartOpen(true)}
              aria-label="Shiko shportën"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <span>Shporta</span>
              {totalCount > 0 && (
                <span className="cart-badge">{totalCount}</span>
              )}
            </button>

            {/* ── Mobile toggle ── */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Menu"
            >
              <div className={`hamburger ${mobileOpen ? 'open' : ''}`}>
                <span /><span /><span />
              </div>
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-mobile-inner">
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-mobile-link ${location.pathname === l.to ? 'active' : ''}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="nav-mobile-label">{l.label}</span>
              <svg className="nav-mobile-arrow" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}