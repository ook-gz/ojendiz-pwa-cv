import Head from 'next/head'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Ojendiz</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" type="image/png" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Layout>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  )
}
