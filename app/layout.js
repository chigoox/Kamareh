import { CartWrapper } from '@/StateManager/CartContext'
import { Bebas_Neue, Jost, Courier_Prime } from 'next/font/google'
import NavBar from './Componets/Header/NavBar'
import { siteName, siteTag } from './META'
import { UIProvider } from './UIProvider'
import './globals.css'


const jost = Jost({ subsets: ['latin'] })

const courier_prime = Courier_Prime({
    weight: '400',
    subsets: ['latin'],
})

export const metadata = {
  title: siteName,
  description: siteTag,
}




export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="http://localhost:8097"></script>
        <link rel='icon' href='public/Images/371104266_1371705300076286_136258277339424492_n.jpeg' />
      </head>
      <body className={courier_prime.className}>
        <UIProvider>
          <CartWrapper>
            <NavBar />
            {children}
          </CartWrapper>
        </UIProvider>
      </body>
    </html>
  )
}


