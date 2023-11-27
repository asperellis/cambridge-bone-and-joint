import React from 'react'
import { Page } from '../types'
import { Footer, Header } from '../components'

export interface PageLayoutProps extends Page {
  children: React.ReactNode
}

export const PageLayout = ({ children, ...pageProps }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header {...pageProps} />
      <main className="flex-1 mx-5">{children}</main>
      <Footer />
    </div>
  )
}
