import type { AppProps } from 'next/app'
import "ress"
import "@/styles/ress.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
