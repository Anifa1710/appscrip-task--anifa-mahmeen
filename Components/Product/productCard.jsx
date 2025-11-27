import { useState } from 'react';
import styles from '../../styles/components/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${product.title} to cart`);
  };
  
  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img 
          src={product.image} 
          alt={product.title}
          className={`${styles.productImage} ${isImageLoaded ? styles.loaded : ''}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productCategory}>{product.category}</p>
        
        <div className={styles.productRating}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`${styles.star} ${i < Math.floor(product.rating.rate) ? styles.filled : ''}`}>
                ★
              </span>
            ))}
          </div>
          <span className={styles.ratingCount}>({product.rating.count})</span>
        </div>
        
        <div className={styles.productPrice}>
          <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button 
          className={styles.addToCartBtn}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;