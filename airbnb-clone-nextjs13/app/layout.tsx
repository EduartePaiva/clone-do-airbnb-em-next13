import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* É para concertar um bug mas parece que já foi resolvido <ClientOnly></ClientOnly> */}

        <Modal actionLabel='Submit' isOpen title='Hello World' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
