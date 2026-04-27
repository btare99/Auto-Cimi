import { Link } from 'react-router-dom';
import "./AboutPage.css";

const stats = [
  { num: '10+', label: 'Vite Përvojë' },
  { num: '500+', label: 'Artikuj në Stok' },
  { num: '6', label: 'Marka Makinash' },
  { num: '10k+', label: 'Klientë' },
];

const values = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Cilësi e Garantuar',
    desc: 'Çdo pjesë kontrollohet rreptësisht para se të dalë nga depoja jonë.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Shërbim i Shpejtë',
    desc: 'Porositë përpunohen brenda 24 orëve dhe dërgohen në të gjithë Shqipërinë.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Ekspertizë Teknike',
    desc: 'Stafi ynë ka njohuri të thella për markat Peugeot, Renault, Citroën dhe Hyundai.',
  },
];

const timeline = [
  { year: '2014', label: 'Themelimi', desc: 'Auto Cimi hap dyert e para në Tiranë.' },
  { year: '2017', label: 'Zgjerimi', desc: 'Shtojmë markat Hyundai dhe DS në katalog.' },
  { year: '2020', label: 'Online', desc: 'Lansohet platforma dixhitale e porosive.' },
  { year: '2024', label: 'Sot', desc: 'Mbi 10,000 klientë të shërbyer në të gjithë Shqipërinë.' },
];

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-bg-word">AUTOCIMI</div>
        <div className="container about-hero-inner">
          <div className="about-hero-left">
            <div className="about-eyebrow">
              <span className="about-eyebrow-line" />
              Rreth Nesh
            </div>
            <h1 className="about-title">
              Ekselencë në<br /><span>Pjesë Këmbimi</span>
            </h1>
          </div>
          <div className="about-hero-right">
            <p className="about-lead">
              Auto Cimi u themelua me një qëllim të vetëm: t'u ofrojë pronarëve të makinave
              franceze dhe Hyundai pjesë këmbimi të cilësisë më të lartë me çmimin më të drejtë.
              Me mbi një dekadë përvojë, ne jemi bërë pika kryesore e referimit për serviset
              dhe individët në të gjithë Shqipërinë.
            </p>
            <div className="about-hero-rule" />
            <div className="about-founded">
              <span className="about-founded-num">2014</span>
              <span className="about-founded-label">Viti i themelimit</span>
            </div>
          </div>
        </div>
        <div className="about-hero-line" />
      </section>

      {/* ── Stats ── */}
      <section className="about-stats">
        {stats.map((s, i) => (
          <div className="about-stat" key={s.label} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="about-stat-num">{s.num}</div>
            <div className="about-stat-label">{s.label}</div>
            {i < stats.length - 1 && <div className="about-stat-sep" />}
          </div>
        ))}
      </section>

      {/* ── Feature ── */}
      <section className="about-feature container">
        <div className="about-feature-img-wrap">
          <div className="about-feature-img">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80"
              alt="Warehouse"
            />
            <div className="about-feature-img-overlay" />
          </div>
          <div className="about-feature-badge">
            <span className="about-feature-badge-num">10+</span>
            <span className="about-feature-badge-text">vite<br />eksperiencë</span>
          </div>
          <div className="about-feature-corner-h" />
          <div className="about-feature-corner-v" />
        </div>

        <div className="about-feature-body">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            Misioni Ynë
          </div>
          <h2 className="about-subtitle">
            Cilësia është<br /><span>prioriteti ynë</span>
          </h2>
          <p className="about-body-text">
            Çdo pjesë që kalon nga depoja jonë i nënshtrohet një kontrolli të rreptë cilësie.
            Ne bashkëpunojmë vetëm me prodhuesit më të njohur në Evropë dhe Azi për të siguruar
            që makina juaj të qëndrojë në rrugë me siguri të plotë.
          </p>

          <div className="about-values">
            {values.map((v, i) => (
              <div className="about-value" key={v.title} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="about-value-icon">{v.icon}</div>
                <div className="about-value-body">
                  <div className="about-value-title">{v.title}</div>
                  <div className="about-value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link to="/pjeset" className="about-cta">
            Shiko Katalogun
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="about-eyebrow" style={{ marginBottom: 40 }}>
            <span className="about-eyebrow-line" />
            Historia Jonë
          </div>
          <div className="about-timeline">
            {timeline.map((t, i) => (
              <div className="about-timeline-item" key={t.year} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="about-timeline-year">{t.year}</div>
                <div className="about-timeline-dot" />
                <div className="about-timeline-content">
                  <div className="about-timeline-label">{t.label}</div>
                  <div className="about-timeline-desc">{t.desc}</div>
                </div>
              </div>
            ))}
            <div className="about-timeline-line" />
          </div>
        </div>
      </section>

      {/* ── CTA Bottom ── */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-bg-word">KONTAKT</div>
            <div className="about-cta-left">
              <h2 className="about-cta-title">Gati të bashkëpunojmë?</h2>
              <p className="about-cta-desc">
                Ekipi ynë është gjithmonë i gatshëm t'ju ndihmojë të gjeni pjesën e duhur.
              </p>
            </div>
            <div className="about-cta-actions">
              <Link to="/kontakt" className="about-btn-primary">
                Na Kontaktoni
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/pjeset" className="about-btn-outline">Shiko Katalogun</Link>
            </div>
            <div className="about-cta-corner-tl" />
            <div className="about-cta-corner-br" />
          </div>
        </div>
      </section>

    </div>
  );
}