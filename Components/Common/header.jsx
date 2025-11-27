import { useState } from 'react';
import styles from '../../styles/components/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <a href="/">
              <img src="/images/logo.svg" alt="Appscrip Logo" width="120" height="30" />
            </a>
          </div>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Products</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Categories</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>About</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>Contact</a>
              </li>
            </ul>
          </nav>
          
          <div className={styles.headerActions}>
            <button className={styles.searchBtn} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            
            <button className={styles.cartBtn} aria-label="Shopping Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className={styles.cartCount}>0</span>
            </button>
            
            <button 
              className={styles.menuToggle} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;