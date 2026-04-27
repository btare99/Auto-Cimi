import "./ProductCard.css";

const ProductCard = ({ product, onAdd, onSelect }) => {
  return (
    <article className="product-card">

      {/* Image */}
      <button
        className="product-img-wrap"
        onClick={() => onSelect(product)}
        aria-label={`View details for ${product.name}`}
      >
        <img src={product.image} alt={product.name} className="product-img" />
        <div className="product-img-overlay" />
        <span className="product-view-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Shiko
        </span>
      </button>

      {/* Info */}
      <div className="product-info">

        <div className="product-top">
          <span className="product-category">{product.category}</span>
          <div className="product-price">
            <span className="product-price-num">{product.price.toFixed(2)}</span>
            <em className="product-price-cur">€</em>
          </div>
        </div>

        <div className="product-divider" />

        <h3 className="product-name">{product.name}</h3>

        <button
          className="product-add"
          onClick={() => onAdd(product)}
          aria-label={`Shto ${product.name} në shportë`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Shto në Shportë
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

      </div>

      {/* Corner accent */}
      <div className="product-card-corner" />

    </article>
  );
};

export default ProductCard;