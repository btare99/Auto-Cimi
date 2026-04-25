import { useCart } from '../context/CartContext';
import './PartModal.css';

export default function PartModal({ part, onClose }) {
  const { addToCart, setCartOpen } = useCart();
  if (!part) return null;

  const handleAdd = () => {
    addToCart(part);
    onClose();
    setCartOpen(true);
  };

  const specs = [
    { label: 'Kodi', value: `#${part.partNumber}` },
    { label: 'Kategoria', value: part.category },
    { label: 'Përshtatshmëria', value: `${part.brand} ${part.model}` },
    { label: 'Vitet', value: part.years?.join(', ') },
    { label: 'Gjendja', value: 'E përdorur (Origjinale)' },
  ];

  return (
    <div className="pm-overlay" onClick={onClose}>
      <div className="pm-content" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className="pm-close" onClick={onClose} aria-label="Mbyll">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="pm-grid">

          {/* ── Image side ── */}
          <div className="pm-image-side">
            <img
              src={part.image || 'https://via.placeholder.com/600x450?text=AutoCimi'}
              alt={part.name}
              className="pm-img"
            />
            <div className="pm-img-overlay" />
            {part.isNewPart && (
              <span className="pm-badge">
                <span className="pm-badge-line" />
                I RI
              </span>
            )}
            <div className="pm-img-tag">{part.category}</div>
          </div>

          {/* ── Info side ── */}
          <div className="pm-info-side">

            <div className="pm-header">
              <div className="pm-eyebrow">
                <span className="pm-eyebrow-line" />
                Detajet e Pjesës
              </div>
              <h2 className="pm-title">{part.name}</h2>
              <div className="pm-divider" />
            </div>

            {/* Specs */}
            <div className="pm-specs">
              {specs.map((s) => (
                <div className="pm-spec-row" key={s.label}>
                  <span className="pm-spec-label">{s.label}</span>
                  <span className="pm-spec-sep" />
                  <span className="pm-spec-value">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pm-footer">
              <div className="pm-price-block">
                <span className="pm-price-label">Çmimi</span>
                <div className="pm-price">
                  <span className="pm-price-num">{part.price.toFixed(2)}</span>
                  <em className="pm-price-cur">€</em>
                </div>
              </div>

              <button className="pm-add-btn" onClick={handleAdd}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                Shto në Shportë
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Corner accents */}
        <div className="pm-corner-tl" />
        <div className="pm-corner-br" />

      </div>
    </div>
  );
}