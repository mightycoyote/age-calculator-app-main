import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'], 
  style: ['normal', 'italic'],
  weight: ['400', '700', '800'],
})

export const metadata = {
  title: 'Age Calculator App',
  description: 'Age Calculator App Frontendmentor Challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
