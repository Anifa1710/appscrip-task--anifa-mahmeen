import styles from '../../styles/components/ProductSort.module.css';

const ProductSort = ({ sortBy, onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className={styles.sortContainer}>
      <div className={styles.resultsCount}>
        <p>Showing <span>12</span> products</p>
      </div>
      
      <div className={styles.sortOptions}>
        <label htmlFor="sort-select">Sort by:</label>
        <select 
          id="sort-select"
          className={styles.sortSelect}
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="featured">Featured</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating-high-low">Rating: High to Low</option>
          <option value="name-a-z">Name: A to Z</option>
          <option value="name-z-a">Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSort;