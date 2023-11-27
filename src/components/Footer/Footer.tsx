import React from 'react'
import { useSiteGlobals } from '../../context'
import { Logo } from '../Logo'
import { Button } from '../Button'

export const Footer = () => {
  const siteGlobals = useSiteGlobals()
  return (
    <footer className="bg-brand-dark-blue text-white pt-20 pb-10 space-y-20 mt-20 px-10">
      <div className="grid grid-cols-4 gap-10">
        <Logo fill="white" className="self-center mx-auto" width={200} />
        <div>
          <h3 className="text-xl mb-5 font-semibold">Our location</h3>
          <address className="not-italic">
            {siteGlobals?.street_address}
            <br />
            {siteGlobals?.city} {siteGlobals?.state}, {siteGlobals?.zip_code}
          </address>
        </div>
        <div>
          <h3 className="text-xl mb-5 font-semibold">Hours</h3>
          <ul>
            <li>Monday:</li>
            <li>Tuesday:</li>
            <li>Wednesday:</li>
            <li>Thursday:</li>
            <li>Friday:</li>
            <li>Saturday:</li>
            <li>Sunday:</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold">Contact us</h3>
          <Button variant="secondary">Patient Portal</Button>
          <Button variant="secondary">Urgent Care</Button>
          <Button variant="secondary">(740) 439-8886</Button>
        </div>
      </div>
      <div className="text-center">
        © 2023 CAMBRIDGE BONE AND JOINT | A PGSEO AFFILIATE PRACTICE
      </div>
    </footer>
  )
}
