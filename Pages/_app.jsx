import '../styles/globals.css'
import Head from 'next/head' // Make sure you import Head
import Layout from '../components/common/layout.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp