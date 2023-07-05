import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleOAuthProvider } from '@react-oauth/google';
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
        <meta name="description" content="Beat the queue with one-click ticket reservation. Enjoy seamless playtime at a recreation space near you." />
        <meta name="keywords" content="ticket, spaces," />
      </Head>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GoogleOAuthProvider clientId='1054832259017-7ud7lha28m8r3p9oa6fj6hsv0ndme7bb.apps.googleusercontent.com'>
              <Component {...pageProps} />
            </GoogleOAuthProvider>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </>
  )
}

