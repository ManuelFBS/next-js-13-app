import '../styles/globals.css'
// import { Inter } from 'next/font/google'
// import { Space_Grotesk } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Navigation from '../components/Navigation'

// const inter = Inter({ subsets: ['latin'] })
// const font = Space_Grotesk({
//   weight: ['400', '700'],
//   subsets: ['latin']
// })
const font = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'My first App with Next 13',
  description: 'Generated by create next app'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='es'>
      {/* <body className={inter.className}> */}
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
