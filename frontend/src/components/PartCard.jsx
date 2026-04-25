import { useCart } from '../context/CartContext';
import './PartCard.css';

export default function PartCard({ part, onSelect }) {
  const { addToCart, setCartOpen } = useCart();
  const { name, brand, model, price, image, isNewPart, partNumber } = part;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(part);
    setCartOpen(true);
  };

  return (
    <div className="part-card" onClick={() => onSelect(part)}>
      <div className="part-card-img">
        <img src={image || 'https://via.placeholder.com/400x300?text=AutoCimi'} alt={name} />
        {isNewPart && <span className="part-badge">I RI</span>}
        <div className="part-card-overlay" />
        
        {/* Direct Add button - visible on hover or mobile */}
        <button 
          className="part-add-direct" 
          onClick={handleAddToCart}
          aria-label="Shto në shportë"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
      </div>
      
      <div className="part-card-body">
        <div className="part-card-meta">
          <span className="part-card-brand">{brand} · {model}</span>
          <span className="part-card-num">#{partNumber}</span>
        </div>
        <h3 className="part-card-name">{name}</h3>
        
        <div className="part-card-footer">
          <div className="part-card-price">
            {price.toFixed(2)}<span>€</span>
          </div>
          <div className="part-card-btn">
            Detajet
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
      <div className="part-card-accent" />
    </div>
  );
}
