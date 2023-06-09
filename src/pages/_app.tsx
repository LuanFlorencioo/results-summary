import type { AppProps } from "next/app";
import font from "@/styles/font";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App;
