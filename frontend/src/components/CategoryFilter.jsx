import "./CategoryFilter.css";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter-wrapper">
      <div className="category-filter">
        <button
          className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
          onClick={() => onSelectCategory("All")}
          aria-pressed={selectedCategory === "All"}
        >
          <span className="category-text">Të Gjitha</span>
          <span className="category-underline"></span>
        </button>
        {categories.map((category, index) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => onSelectCategory(category)}
            aria-pressed={selectedCategory === category}
            style={{ '--btn-delay': `${index * 0.05}s` }}
          >
            <span className="category-text">{category}</span>
            <span className="category-underline"></span>
          </button>
        ))}
      </div>
      <div className="category-filter-fade"></div>
    </div>
  );
};

export default CategoryFilter;