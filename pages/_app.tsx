import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import axios from 'axios';


const client = new ApolloClient({
  uri: 'https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql',
  cache: new InMemoryCache(),
});

axios.defaults.baseURL = 'https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql';
axios.defaults.headers.common['Authorization'] = "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Pentria</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
