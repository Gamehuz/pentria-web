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
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
  headers: {
    ...(token !== undefined ? { Authorization: `Bearer ${token}` } : {})
  },
});

axios.defaults.baseURL = 'http://localhost:8000/graphql';
axios.defaults.headers.common['Authorization'] = "Bearer" + token;

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Pentria</title>
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

