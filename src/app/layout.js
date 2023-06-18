import Header from '@/components/Header'
import './globals.css'
import { Titillium_Web } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] }) 
const inter = Titillium_Web({ 
  weight: ['200','300','400', '600','700', '900'],
  subsets: ['latin'] 
}) 

export const metadata = {
  icons:{
    icon: '/favicon.jpg',
  },
  title: 'Digital Partners',
  description: 'We start at the grassroot to build our solutions for identity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      {/* <Header/> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
