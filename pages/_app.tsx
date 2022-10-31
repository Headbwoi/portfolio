import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, ContactIconsMobile, Header } from "../components"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState({} as Number)
  // const [scrollUp, setScrollUp] = useState<boolean>()

  useEffect(() => {
    // const scrollUpHandler = () => {
    //   scrollUp === true ? setScrollUp(false) : setScrollUp(true)
    // }

    // window.addEventListener("scroll", scrollUpHandler)
    return () => {
      setScreenSize(window.screen.width)
      // window.removeEventListener("scroll", scrollUpHandler)
    }
  }, [screenSize])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      {screenSize < 768 ? <ContactIconsMobile /> : <ContactIcons />}
    </>
  )
}

export default MyApp
