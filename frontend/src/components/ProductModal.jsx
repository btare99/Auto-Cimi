import "./ProductModal.css";

const ProductModal = ({ product, onClose, onAdd }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose} aria-hidden="true" />

      <div className="modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">

        {/* Close */}
        <button className="modal-close" onClick={onClose} aria-label="Close product modal">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image */}
        <div className="modal-img-wrap">
          <img src={product.image} alt={product.name} className="modal-img" />
          <div className="modal-img-overlay" />
          <span className="modal-img-category">{product.category}</span>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="modal-eyebrow">
            <span className="modal-eyebrow-line" />
            {product.category}
          </div>

          <h2 id="modal-title" className="modal-name">{product.name}</h2>

          <div className="modal-divider" />

          <p id="modal-description" className="modal-desc">{product.description}</p>

          <div className="modal-footer">
            <div className="modal-price-block">
              <span className="modal-price-label">Çmimi</span>
              <div className="modal-price">
                <span className="modal-price-num">
                  {typeof product.price === 'number'
                    ? product.price.toFixed(2)
                    : product.price}
                </span>
                <em className="modal-price-currency">€</em>
              </div>
            </div>

            <button
              className="modal-add"
              onClick={() => { onAdd(product); onClose(); }}
              aria-label={`Shto ${product.name} në shportë dhe mbyll dritaren`}
            >
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

        {/* Corner accents */}
        <div className="modal-corner-tl" />
        <div className="modal-corner-br" />
      </div>
    </>
  );
};

export default ProductModal;