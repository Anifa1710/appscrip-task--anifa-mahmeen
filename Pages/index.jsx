import { useState, useEffect } from 'react';
import { useProducts, useCategories } from '../hooks/useApi';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';
import ProductSort from '../components/product/ProductSort';
import styles from '../styles/pages/Home.module.css';

const HomePage = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: { min: 0, max: 1000 },
    rating: 0
  });
  const [sortBy, setSortBy] = useState('featured');
  
  const { products, loading, error, refetch } = useProducts(20, filters.category);
  const { categories, loading: categoriesLoading } = useCategories();

  // Apply filters and sorting
  const getFilteredAndSortedProducts = () => {
    let filteredProducts = [...products];
    
    // Apply price filter
    filteredProducts = filteredProducts.filter(product => 
      product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
    );
    
    // Apply rating filter
    if (filters.rating > 0) {
      filteredProducts = filteredProducts.filter(product => 
        product.rating.rate >= filters.rating
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating-high-low':
        filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case 'name-a-z':
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-z-a':
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // Keep original order for 'featured'
        break;
    }
    
    return filteredProducts;
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const filteredAndSortedProducts = getFilteredAndSortedProducts();

  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Our Products</h1>
          <p>Discover our wide range of quality products</p>
        </div>
        
        <div className={styles.contentLayout}>
          <aside className={styles.sidebar}>
            {!categoriesLoading && (
              <ProductFilters 
                categories={categories} 
                onFilterChange={handleFilterChange}
              />
            )}
          </aside>
          
          <main className={styles.mainContent}>
            <ProductSort 
              sortBy={sortBy}
              onSortChange={handleSortChange}
            />
            
            <ProductGrid 
              products={filteredAndSortedProducts} 
              loading={loading}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;