import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, Header } from "../components"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ContactIcons />
    </>
  )
}

export default MyApp
