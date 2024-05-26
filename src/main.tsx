import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

import client from './apolloClient';
import './index.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  loadDevMessages();
  loadErrorMessages();

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}


enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
  )
});