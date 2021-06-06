import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar";
import RouteBg from "../components/RouteBg";
import store from "../lib/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RouteBg>
        <Navbar />
        <Component {...pageProps} />
      </RouteBg>
    </Provider>
  );
}

export default MyApp;
