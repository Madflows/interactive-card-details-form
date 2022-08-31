import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Interactive Card Details Form - Madflows.dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
