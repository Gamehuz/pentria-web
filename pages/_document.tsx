import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/pentria.png" />
        <link rel="icon" type="image/png" sizes="32x22" href="/pentria.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
