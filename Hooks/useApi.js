import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories } from '../utils/api';

export const useProducts = (initialLimit = 20, initialCategory = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async (limit = initialLimit, category = initialCategory) => {
    try {
      setLoading(true);
      const data = await fetchProducts(limit, category);
      
      // Add some mock data for demonstration
      const enhancedProducts = data.map(product => ({
        ...product,
        discount: Math.floor(Math.random() * 50) + 10,
        originalPrice: product.price * (1 + (Math.random() * 0.5))
      }));
      
      setProducts(enhancedProducts);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [initialCategory]);

  return { products, loading, error, refetch: loadProducts };
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};