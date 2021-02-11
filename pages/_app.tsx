import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Level Next.js</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Next Level Next.js" />
        <meta
          property="og:description"
          content="Next Level Next.js is a premium fullstack course with 29 videos and over 8 hours of content."
        />
        <meta property="og:image" content="/og.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
