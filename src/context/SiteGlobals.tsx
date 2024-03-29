import React from 'react'

import { Globals } from '../types'
import { useGetPages, useGetSiteGlobals } from '../service'

export const DEFAULT_GLOBALS: Globals = {
  city: '',
  friday_closed: '',
  friday_open: '',
  monday_closed: '',
  monday_open: '',
  patient_portal_url: '',
  phone_number: '',
  saturday_closed: '',
  saturday_open: '',
  state: '',
  street_address: '',
  sunday_closed: '',
  sunday_open: '',
  thursday_closed: '',
  thursday_open: '',
  tuesday_closed: '',
  tuesday_open: '',
  urgent_care_url: '',
  wednesday_closed: '',
  wednesday_open: '',
  zip_code: '',
  pages: {},
  email: '',
  mapsUrl: '',
  fax_number: '',
  announcement_description: '',
  announcement_title: '',
  announcement_image: null
}

export const SiteGlobalsContext = React.createContext<Globals | undefined>(
  DEFAULT_GLOBALS
)

export const useSiteGlobals = () => React.useContext(SiteGlobalsContext)

interface SiteGlobalsProviderProps {
  children: React.ReactNode
}

export const SiteGlobalsProvider = ({ children }: SiteGlobalsProviderProps) => {
  const { data: siteGlobals } = useGetSiteGlobals()
  const { data: pages = {} } = useGetPages()

  const globals: Globals = {
    ...DEFAULT_GLOBALS,
    ...siteGlobals,
    pages,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${siteGlobals?.street_address}, ${siteGlobals?.city}, ${siteGlobals?.state} ${siteGlobals?.zip_code}, United States`
    )}`
  }

  return (
    <SiteGlobalsContext.Provider value={globals}>
      {children}
    </SiteGlobalsContext.Provider>
  )
}
