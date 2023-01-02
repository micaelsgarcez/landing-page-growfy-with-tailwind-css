import { Poppins } from '@next/font/google'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const font = Poppins({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  variable: '--font'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${font.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
