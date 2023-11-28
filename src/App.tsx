import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About, Home, LandingPage, Patients, Specialties } from './pages'
import { QueryClientProvider } from './service'
import { SiteGlobalsProvider } from './context'

export const App = () => {
  return (
    <QueryClientProvider>
      <SiteGlobalsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="development" element={<Home />} />
            <Route path="development/about" element={<About />} />
            <Route path="development/patients" element={<Patients />} />
            <Route path="development/specialties" element={<Specialties />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </SiteGlobalsProvider>
    </QueryClientProvider>
  )
}
