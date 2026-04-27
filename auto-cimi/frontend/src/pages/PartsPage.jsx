import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchParts, fetchFilters } from '../api';
import { parts as mockParts, filters as mockFilters } from '../data/mockData';
import PartCard from '../components/PartCard';
import PartModal from '../components/PartModal';
import SearchBar from '../components/SearchBar';
import './PartsPage.css';

function FilterSection({ title, items, selected, onChange }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="filter-section">
      <button className="filter-section-header" onClick={() => setOpen(o => !o)}>
        <span className="filter-section-title">{title}</span>
        <svg
          className={`filter-chevron ${open ? 'open' : ''}`}
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="filter-section-body">
          <label className="filter-checkbox-item">
            <input
              type="checkbox"
              className="filter-cb"
              checked={selected === 'All' || selected === ''}
              onChange={() => onChange('All')}
            />
            <span className="filter-cb-box">
              {(selected === 'All' || selected === '') && (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2 6 5 9 10 3" />
                </svg>
              )}
            </span>
            <span className="filter-cb-label">Të gjitha</span>
          </label>

          {items.map((item) => {
            const isChecked = selected === item;
            return (
              <label key={item} className="filter-checkbox-item">
                <input
                  type="checkbox"
                  className="filter-cb"
                  checked={isChecked}
                  onChange={() => onChange(isChecked ? 'All' : item)}
                />
                <span className="filter-cb-box">
                  {isChecked && (
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  )}
                </span>
                <span className="filter-cb-label">{item}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function PartsPage() {
  const [parts, setParts] = useState([]);
  const [filters, setFilters] = useState({ brands: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [selectedPart, setSelectedPart] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const currentBrand = query.get('brand') || 'All';
  const currentCategory = query.get('category') || 'All';
  const currentSearch = query.get('search') || '';

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const filtersData = await fetchFilters();
        setFilters(filtersData);
      } catch (err) {
        console.error('Gabim në ngarkimin e filtrave:', err);
      }
    };
    loadFilters();
  }, []);

  useEffect(() => {
    const loadParts = async () => {
      setLoading(true);
      try {
        const data = await fetchParts({
          brand: currentBrand !== 'All' ? currentBrand : '',
          category: currentCategory !== 'All' ? currentCategory : '',
          search: currentSearch,
          limit: 100
        });
        setParts(data.parts);
      } catch (err) {
        console.error('Gabim në ngarkimin e pjesëve:', err);
      } finally {
        setLoading(false);
      }
    };

    loadParts();
  }, [currentBrand, currentCategory, currentSearch]);

  const updateFilter = (key, value) => {
    const newQuery = new URLSearchParams(location.search);
    if (value && value !== 'All') {
      newQuery.set(key, value);
    } else {
      newQuery.delete(key);
    }
    if (key !== 'page') newQuery.delete('page');
    navigate({ search: newQuery.toString() });
  };

  const handleSearch = (term) => updateFilter('search', term);

  const hasActiveFilters =
    currentBrand !== 'All' || currentCategory !== 'All' || currentSearch !== '';

  const activeCount = [currentBrand !== 'All', currentCategory !== 'All', currentSearch !== ''].filter(Boolean).length;

  return (
    <div className="parts-page">

      {/* ── Hero ── */}
      <section className="parts-hero">
        <div className="parts-hero-bg-word">KATALOG</div>
        <div className="container">
          <div className="parts-hero-inner">
            <div className="parts-hero-left">
              <div className="parts-eyebrow">
                <span className="eyebrow-line" />
                Katalogu Digital
              </div>
              <h1 className="parts-hero-title">
                Gjeni pjesën<br /><span>që ju duhet</span>
              </h1>
            </div>
            <div className="parts-hero-search">
              <SearchBar onSearch={handleSearch} initialValue={currentSearch} />
              <p className="parts-hero-hint">Kërkoni sipas emrit, kodit ose modelit të makinës</p>
            </div>
          </div>
        </div>
        <div className="parts-hero-line" />
      </section>

      {/* ── INFO NOTICE ── */}
      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="parts-notice-banner">
          <div className="parts-notice-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
          <div className="parts-notice-text">
            <strong>Stoku ynë është më i madh!</strong> Në website janë shfaqur vetëm disa nga pjesët tona. Nëse nuk e gjeni atë që kërkoni, na kontaktoni direkt.
          </div>
          <a href="tel:+355691234567" className="parts-notice-call">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +355 69 123 4567
          </a>
        </div>
      </div>

      {/* ── Layout: Sidebar + Grid ── */}
      <div className="parts-layout container">

        {/* Mobile filter toggle */}
        <button
          className="mobile-filter-toggle"
          onClick={() => setSidebarOpen(o => !o)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="12" y1="18" x2="20" y2="18" />
          </svg>
          Filtrat
          {activeCount > 0 && <span className="mobile-filter-badge">{activeCount}</span>}
        </button>

        {/* ── Sidebar ── */}
        <aside className={`parts-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <span className="sidebar-title">
              <span className="sidebar-title-line" />
              Filtrat
            </span>
            {hasActiveFilters && (
              <button className="sidebar-clear" onClick={() => navigate('/pjeset')}>
                Pastro
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          {hasActiveFilters && (
            <div className="active-filters">
              {currentBrand !== 'All' && (
                <span className="active-chip">
                  {currentBrand}
                  <button onClick={() => updateFilter('brand', 'All')}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </span>
              )}
              {currentCategory !== 'All' && (
                <span className="active-chip">
                  {currentCategory}
                  <button onClick={() => updateFilter('category', 'All')}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </span>
              )}
            </div>
          )}

          <FilterSection
            title="Marka"
            items={filters.brands}
            selected={currentBrand}
            onChange={(v) => updateFilter('brand', v)}
          />

          <FilterSection
            title="Kategoria"
            items={filters.categories}
            selected={currentCategory}
            onChange={(v) => updateFilter('category', v)}
          />
        </aside>

        {/* ── Main content ── */}
        <main className="parts-main">
          <div className="results-header">
            <div className="results-meta">
              <span className="results-count">{loading ? '—' : parts.length}</span>
              <span className="results-label">rezultate</span>
            </div>
            <div className="results-rule" />
          </div>

          {loading ? (
            <div className="parts-loading">
              <div className="parts-loading-bar">
                <div className="parts-loading-fill" />
              </div>
              <span className="parts-loading-text">Duke kërkuar në stok...</span>
            </div>
          ) : parts.length > 0 ? (
            <div className="parts-grid">
              {parts.map((p, i) => (
                <div
                  key={p._id}
                  className="parts-grid-item"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <PartCard part={p} onSelect={setSelectedPart} />
                </div>
              ))}
            </div>
          ) : (
            <div className="parts-empty">
              <div className="parts-empty-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <h3 className="parts-empty-title">Nuk u gjet asnjë rezultat</h3>
              <p className="parts-empty-desc">Provoni të ndryshoni filtrat ose kërkoni me një term tjetër.</p>
              <button className="parts-empty-btn" onClick={() => navigate('/pjeset')}>Pastro të gjitha</button>
            </div>
          )}
        </main>
      </div>

      {selectedPart && (
        <PartModal part={selectedPart} onClose={() => setSelectedPart(null)} />
      )}
    </div>
  );
}