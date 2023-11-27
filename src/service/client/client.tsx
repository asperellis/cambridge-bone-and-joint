import React from 'react'
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from '@tanstack/react-query'

type QueryClientProviderProps = {
  children: React.ReactNode
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: false,
      staleTime: Infinity
    }
  }
})

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => (
  <ReactQueryClientProvider client={client}>
    {children}
  </ReactQueryClientProvider>
)
