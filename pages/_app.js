import "../styles/globals.css";

import Head from "next/head";
import { useState } from "react";

import { CardDetailsContext, ThemeContext } from "../contexts";

function MyApp({ Component, pageProps }) {
  const [ cardInfo, setCardInfo ] = useState({
    name: "",
    number: "",
    cvc: "",
    expMonth: "",
    expYear: ""
  });

  const [theme, setTheme] = useState("light")

  return (
    <CardDetailsContext.Provider value={{ cardInfo, setCardInfo }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Head>
          <title>Interactive Card Details Form - Madflows.dev</title>
        </Head>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </CardDetailsContext.Provider>
  );
}

export default MyApp;
