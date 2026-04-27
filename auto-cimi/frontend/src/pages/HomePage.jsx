import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchNewParts, fetchComingCars } from '../api';
import { parts as mockParts, comingCars as mockCars } from '../data/mockData';
import logo from '../assets/logo-white.png';
import PartCard from '../components/PartCard';
import PartModal from '../components/PartModal';
import ReservationModal from '../components/ReservationModal';
import './HomePage.css';

const BRANDS = ['Peugeot', 'Renault', 'Citroën', 'DS', 'Alpine', 'Hyundai'];

export default function HomePage() {
  const [newParts, setNewParts] = useState([]);
  const [comingCars, setComingCars] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [partsData, carsData] = await Promise.all([
          fetchNewParts(),
          fetchComingCars()
        ]);
        setNewParts(partsData);
        setComingCars(carsData);
      } catch (err) {
        console.error('Gabim në ngarkimin e të dhënave:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg-word">AUTOCIMI</div>

        <div className="hero-inner container">
          <div className="hero-left">
            <div className="hero-tag-row">
              <span className="hero-tag-line" />
              <span className="hero-tag">Ekspertë të Pjesëve Franceze</span>
            </div>

            <h1 className="hero-title">
              PRECIZION<br />
              DHE <span>PERFORMANCË</span>
            </h1>

            <p className="hero-lead">
              Pjesë këmbimi origjinale të garantuara për Peugeot, Renault dhe Hyundai.
              Zgjidhja profesionale për mirëmbajtjen e makinës suaj.
            </p>

            <div className="hero-actions">
              <Link to="/pjeset" className="hero-btn-primary">
                Zbuloni Katalogun
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/kontakt" className="hero-btn-outline">Na Kontaktoni</Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">10+</span>
                <span className="hero-stat-label">Vite Përvojë</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">500+</span>
                <span className="hero-stat-label">Artikuj në Stok</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">10k+</span>
                <span className="hero-stat-label">Klientë</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-img-frame">
              <img
                src={logo}
                alt="Auto parts"
                className="hero-img"
              />
              <div className="hero-img-overlay" />
              <div className="hero-img-badge">
                <span className="hero-img-badge-num">6</span>
                <span className="hero-img-badge-label">Marka<br />Makinash</span>
              </div>
            </div>
            <div className="hero-frame-accent-h" />
            <div className="hero-frame-accent-v" />
          </div>
        </div>

        <div className="hero-bottom-line" />
      </section>

      {/* ── Brands Strip ── */}
      <div className="brands-bar">
        <div className="brands-track">
          {BRANDS.concat(BRANDS).map((b, i) => (
            <span key={i} className="brand-tag">
              <span className="brand-dot" />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ── New Arrivals ── */}
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Inventari i RI
              </div>
              <h2 className="section-title">
                Arritjet e <span>Fundit</span>
              </h2>
            </div>
            <Link to="/pjeset" className="section-link">
              Shiko të gjitha
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {loading ? (
            <div className="loading-center">
              <div className="loading-bar-wrap">
                <div className="loading-bar-inner" />
              </div>
              <span className="loading-label">Duke ngarkuar stokun...</span>
            </div>
          ) : (
            <div className="parts-grid">
              {newParts.slice(0, 12).map((part, i) => (
                <div key={part._id} className="parts-grid-item" style={{ animationDelay: `${i * 0.07}s` }}>
                  <PartCard part={part} onSelect={setSelectedPart} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="home-section coming-section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow-line" />
                Pritet së shpejti
              </div>
              <h2 className="section-title">
                Modelet e <span>Ardhshme</span>
              </h2>
            </div>
          </div>

          <div className="cars-grid">
            {comingCars.slice(0, 2).map((car, i) => (
              <div key={car._id} className="car-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="car-img-wrap">
                  <img src={car.image} alt={car.model} className="car-img" />
                  <div className="car-img-overlay" />
                  <div className="car-coming-badge">Së Shpejti</div>
                </div>
                <div className="car-body">
                  <span className="car-brand">{car.brand}</span>
                  <h3 className="car-model">{car.model}</h3>
                  <p className="car-desc">{car.description}</p>
                  <div className="car-date">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    PRITET: <span>{car.expectedDate}</span>
                  </div>
                  <button className="car-reserve-btn" onClick={() => setSelectedCar(car)}>
                    Rezervo Makinën
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
                <div className="car-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-bg-word">KONTAKT</div>
            <div className="cta-left">
              <div className="section-eyebrow" style={{ marginBottom: 16 }}>
                <span className="eyebrow-line" />
                Asistencë Teknike
              </div>
              <h2 className="cta-title">Kërkoni një<br />pjesë specifike?</h2>
              <p className="cta-desc">
                Ekipi ynë teknik është gati t'ju ndihmojë me identifikimin dhe disponueshmërinë.
              </p>
            </div>
            <div className="cta-right">
              <Link to="/kontakt" className="hero-btn-primary">
                Na Shkruani
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="tel:+355691234567" className="hero-btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Telefononi
              </Link>
            </div>
            <div className="cta-corner-tl" />
            <div className="cta-corner-br" />
          </div>
        </div>
      </section>

      {selectedPart && (
        <PartModal part={selectedPart} onClose={() => setSelectedPart(null)} />
      )}

      {selectedCar && (
        <ReservationModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}