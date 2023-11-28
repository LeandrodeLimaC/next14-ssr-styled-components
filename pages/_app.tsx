import type { AppProps } from 'next/app'
import {cdb} from '@alliar/allie-themes'
import {ThemeProvider} from '@alliar/allie-react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={cdb}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}