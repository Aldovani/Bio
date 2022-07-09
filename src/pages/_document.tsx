import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Aldovani Henrique da costa" />
        <meta name="description" content="Frontend Developer" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aldovani-bio.vercel.app/" />
        <meta property="og:title" content="Aldovani Henrique da costa" />
        <meta property="og:description" content="Frontend Developer" />
        <meta property="og:image" content="./capa.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://aldovani-bio.vercel.app/"
        />
        <meta property="twitter:title" content="Aldovani Henrique da costa" />
        <meta property="twitter:description" content="Frontend Developer" />
        <meta property="twitter:image" content="./capa.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
