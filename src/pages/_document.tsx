import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <meta name="apple-mobile-web-app-capable" content="black-translucent"/>
      <link rel="apple-touch-icon-precomposed" href="./images/techelerlogo.svg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
