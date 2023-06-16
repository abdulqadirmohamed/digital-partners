import Header from '@/components/Header'
import './globals.css'
import { Titillium_Web } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] }) 
const inter = Titillium_Web({ 
  weight: ['200','300','400', '600','700', '900'],
  subsets: ['latin'] 
}) 

export const metadata = {
  title: 'Digital Partners',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      {/* <Header/> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
