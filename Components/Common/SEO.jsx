import Head from 'next/head';

const SEO = ({ 
  title = 'Product Listing Page', 
  description = 'Browse our wide range of products',
  keywords = 'products, e-commerce, shopping',
  ogImage = '/images/og-image.jpg',
  ogUrl = ''
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": ogUrl,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 20,
              "itemListElement": []
            }
          })
        }}
      />
    </Head>
  );
};

export default SEO;