import Navbar from './(components)/navbar/Navbar'
import Footer from './(components)/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import myUser from './actions/getUser'
import getBasketItems from './actions/getBasketItems'
import TopButton from './(components)/TopButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ trung tâm dạy thêm ABC',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const myCurrentUser = await myUser();
  const basketItems = await getBasketItems();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          basketItems={basketItems}
          myUser={myCurrentUser}
        />
        <TopButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}
