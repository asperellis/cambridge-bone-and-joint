import React from 'react'
import { useSiteGlobals } from '../../context'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

const toDisplayHours = (open?: string, closed?: string) => {
  if (!open || !closed) {
    return 'Closed'
  }

  const [openH, openM] = open.split(':')
  const [closedH, closedM] = closed.split(':')
  const isOpenPM = Number(openH) >= 12
  const isClosedPM = Number(closedH) >= 12
  return `${Number(openH) % 12}:${openM}${isOpenPM ? 'PM' : 'AM'} - ${
    Number(closedH) % 12
  }:${closedM}${isClosedPM ? 'PM' : 'AM'}`
}

export const Footer = () => {
  const siteGlobals = useSiteGlobals()
  return (
    <footer className="bg-brand-dark-blue text-white pt-20 pb-10 space-y-20 mt-20 px-10 font-varela">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        <Link
          className="font-semibold uppercase text-sm text-brand-dark-blue"
          to="/"
        >
          <Logo fill="white" className="self-center xl:mx-auto" width={200} />
        </Link>
        <div>
          <h3 className="text-xl mb-5 font-semibold font-varela">Hours</h3>
          <ul>
            <li>
              Monday:{' '}
              {toDisplayHours(
                siteGlobals?.monday_open,
                siteGlobals?.monday_closed
              )}
            </li>
            <li>
              Tuesday:{' '}
              {toDisplayHours(
                siteGlobals?.tuesday_open,
                siteGlobals?.tuesday_closed
              )}
            </li>
            <li>
              Wednesday:{' '}
              {toDisplayHours(
                siteGlobals?.wednesday_open,
                siteGlobals?.wednesday_closed
              )}
            </li>
            <li>
              Thursday:{' '}
              {toDisplayHours(
                siteGlobals?.thursday_open,
                siteGlobals?.thursday_closed
              )}
            </li>
            <li>
              Friday:{' '}
              {toDisplayHours(
                siteGlobals?.friday_open,
                siteGlobals?.friday_closed
              )}
            </li>
            <li>
              Saturday:{' '}
              {toDisplayHours(
                siteGlobals?.saturday_open,
                siteGlobals?.saturday_closed
              )}
            </li>
            <li>
              Sunday:{' '}
              {toDisplayHours(
                siteGlobals?.sunday_open,
                siteGlobals?.sunday_closed
              )}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl mb-5 font-semibold font-varela">
            Our location
          </h3>
          <address className="not-italic underline">
            <a href={siteGlobals?.mapsUrl}>
              {siteGlobals?.street_address}
              <br />
              {siteGlobals?.city} {siteGlobals?.state}, {siteGlobals?.zip_code}
            </a>
          </address>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl font-semibold font-varela">Contact us</h3>
          <ul>
            <li>
              Email:{' '}
              <Button
                as="a"
                href={`mailto:${siteGlobals?.email}`}
                variant="none"
                className="underline break-words"
              >
                {siteGlobals?.email}
              </Button>
            </li>
            <li>
              Phone:{' '}
              <Button
                as="a"
                href={`tel:+1${siteGlobals?.phone_number.replaceAll(
                  /[()\-\s]/g,
                  ''
                )}`}
                variant="none"
                className="underline"
              >
                {siteGlobals?.phone_number}
              </Button>
            </li>
            <li>Fax: {siteGlobals?.fax_number}</li>
          </ul>
        </div>
      </div>
      <div className="text-center font-varela">
        {`© ${new Date().getFullYear()} CAMBRIDGE BONE AND JOINT | A PGSEO AFFILIATE PRACTICE`}
      </div>
    </footer>
  )
}
