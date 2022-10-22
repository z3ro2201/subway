
import dotenv from 'dotenv'
import 'dotenv/config'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  /*return (<Layout><Component {...pageProps} /></Layout>)*/
  return (<Component {...pageProps} />)
}

export default MyApp
