import type { AppProps } from 'next/app'
import "ress"
import "@/styles/ress.css"
import { ChakraBaseProvider } from '@chakra-ui/react'
import { Noto_Sans_JP } from 'next/font/google'
import { AnimatePresence } from "framer-motion";


const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notojp.className}>
      <AnimatePresence mode="wait">
        <ChakraBaseProvider>
          <Component {...pageProps} />
        </ChakraBaseProvider>
      </AnimatePresence>
    </main>
  )
}
