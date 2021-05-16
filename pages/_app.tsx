import React from "react";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'

import 'tailwindcss/tailwind.css'

import store from '../lib/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;