import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQty, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (!cartOpen) return null;

  const handleCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setCartOpen(false)} />

      <aside className="cart-sidebar">

        {/* ── Header ── */}
        <div className="cart-header">
          <div className="cart-eyebrow">
            <span className="cart-eyebrow-line" />
            Shporta
          </div>
          <div className="cart-header-right">
            <span className="cart-count">{cartItems.length} artikuj</span>
            <button
              className="cart-close-btn"
              onClick={() => setCartOpen(false)}
              aria-label="Mbyll shportën"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="cart-header-rule" />

        {/* ── Items ── */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (

            <div className="cart-empty">
              <div className="cart-empty-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p className="cart-empty-title">Shporta është bosh</p>
              <p className="cart-empty-sub">Filloni të blini për të shtuar artikuj</p>
            </div>

          ) : (
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div
                  key={item._id}
                  className="cart-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="cart-item-img-wrap">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-img-overlay" />
                  </div>

                  {/* Content */}
                  <div className="cart-item-content">
                    <div className="cart-item-top">
                      <div>
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-specs">{item.brand} {item.model}</p>
                      </div>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item._id)}
                        aria-label="Hiq artikullin"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <div className="cart-item-price">
                        <span className="cart-item-price-num">{item.price.toFixed(2)}</span>
                        <em className="cart-item-price-cur">€</em>
                      </div>

                      <div className="cart-qty">
                        <button
                          className="cart-qty-btn"
                          onClick={() => updateQty(item._id, item.qty - 1)}
                          disabled={item.qty <= 1}
                          aria-label="Zbriti"
                        >−</button>
                        <span className="cart-qty-num">{item.qty}</span>
                        <button
                          className="cart-qty-btn"
                          onClick={() => updateQty(item._id, item.qty + 1)}
                          aria-label="Shto"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span className="cart-summary-label">Nëntotali</span>
                <span className="cart-summary-value">{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="cart-summary-divider" />
              <div className="cart-summary-row">
                <span className="cart-summary-label">Total</span>
                <div className="cart-total-price">
                  <span className="cart-total-num">{totalPrice.toFixed(2)}</span>
                  <em className="cart-total-cur">€</em>
                </div>
              </div>
            </div>

            <button className="cart-btn-checkout" onClick={handleCheckout}>
              Vazhdo me Porosinë
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>

            <button className="cart-btn-clear" onClick={clearCart}>
              Zbraz Shportën
            </button>

            <div className="cart-corner-tl" />
          </div>
        )}

      </aside>
    </>
  );
}