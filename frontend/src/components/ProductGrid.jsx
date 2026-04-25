import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products, onAdd, onSelect }) => {
  if (!products || products.length === 0) {
    return (
      <section className="product-grid-empty">
        <div className="empty-icon-wrap">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="empty-eyebrow">
          <span className="empty-eyebrow-line" />
          Kërkim
        </div>
        <p className="empty-title">Nuk u gjet asnjë produkt</p>
        <p className="empty-sub">Provoni të ndryshoni filtrat ose kërkimin</p>
      </section>
    );
  }

  return (
    <section className="product-grid" aria-label="Product collection">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="product-grid-item"
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <ProductCard
            product={product}
            onAdd={onAdd}
            onSelect={onSelect}
          />
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;