import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import styles from '../../styles/components/Layout.module.css';

const Layout = ({ children, title, description, keywords, ogImage, ogUrl }) => {
  return (
    <div className={styles.layout}>
      <SEO 
        title={title} 
        description={description}
        keywords={keywords}
        ogImage={ogImage}
        ogUrl={ogUrl}
      />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;