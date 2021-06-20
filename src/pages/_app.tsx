import Head from "next/head";
import "/styles/globals.css";
import TopBar from "@components/TopBar/TopBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sunnyside</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <TopBar /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
