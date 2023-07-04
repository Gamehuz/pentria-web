import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { Provider } from 'react-redux'
import { persistor, store } from '../store/store.js';
import { PersistGate } from 'redux-persist/integration/react';

const token = getCookie('token')

const client = new ApolloClient({
  uri: 'https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql',
  cache: new InMemoryCache(),
  headers: {
    ...(token !== undefined ? { Authorization: `Bearer ${token}` } : {})
  },
});

axios.defaults.baseURL = 'https://pentria-apiv1-4w2bw.ondigitalocean.app/graphql';
axios.defaults.headers.common['Authorization'] = "Bearer" + token;

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Pentria</title>
        <meta name="description" content="Beat the queue with one-click ticket reservation. Enjoy seamless playtime at a recreation space near you." />
        <meta name="keywords" content="ticket, spaces," />
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </>
  )
}

