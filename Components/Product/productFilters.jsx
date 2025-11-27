import { useState } from 'react';
import styles from '../../styles/components/ProductFilters.module.css';

const ProductFilters = ({ categories, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, priceRange, rating: selectedRating });
  };

  const handlePriceChange = (type, value) => {
    const newPriceRange = { ...priceRange, [type]: value };
    setPriceRange(newPriceRange);
    onFilterChange({ category: selectedCategory, priceRange: newPriceRange, rating: selectedRating });
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    onFilterChange({ category: selectedCategory, priceRange, rating });
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setPriceRange({ min: 0, max: 1000 });
    setSelectedRating(0);
    onFilterChange({ category: '', priceRange: { min: 0, max: 1000 }, rating: 0 });
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterHeader}>
        <h2>Filters</h2>
        <button className={styles.clearBtn} onClick={clearFilters}>Clear All</button>
      </div>
      
      <div className={styles.filterSection}>
        <h3>Categories</h3>
        <div className={styles.categoryList}>
          <button 
            className={`${styles.categoryBtn} ${selectedCategory === '' ? styles.active : ''}`}
            onClick={() => handleCategoryChange('')}
          >
            All
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.filterSection}>
        <h3>Price Range</h3>
        <div className={styles.priceInputs}>
          <div className={styles.priceInput}>
            <label htmlFor="min-price">Min</label>
            <input 
              id="min-price"
              type="number" 
              min="0" 
              max="1000" 
              value={priceRange.min}
              onChange={(e) => handlePriceChange('min', parseInt(e.target.value))}
            />
          </div>
          <div className={styles.priceInput}>
            <label htmlFor="max-price">Max</label>
            <input 
              id="max-price"
              type="number" 
              min="0" 
              max="1000" 
              value={priceRange.max}
              onChange={(e) => handlePriceChange('max', parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className={styles.priceRange}>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange.max}
            onChange={(e) => handlePriceChange('max', parseInt(e.target.value))}
          />
        </div>
      </div>
      
      <div className={styles.filterSection}>
        <h3>Rating</h3>
        <div className={styles.ratingList}>
          {[5, 4, 3, 2, 1].map(rating => (
            <button 
              key={rating}
              className={`${styles.ratingBtn} ${selectedRating === rating ? styles.active : ''}`}
              onClick={() => handleRatingChange(rating)}
            >
              <span className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < rating ? styles.filled : ''}>
                    ★
                  </span>
                ))}
              </span>
              <span className={styles.ratingText}>& Up</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;