import { Html, Head, Main, NextScript } from 'next/document'
// import Footnav from '@/components/footnav'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <link rel="apple-touch-icon-precomposed" href="./images/webhome.jpg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
