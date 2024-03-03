import React from 'react'
import { Page } from '../../types'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { HorizontalLogo } from '../Logo'
import { useSiteGlobals } from '../../context'
import { Image } from '../Image'

export interface HeaderProps extends Page {}

const isHref = (linkString: string) =>
  linkString.includes('http') ||
  linkString.includes('www') ||
  linkString.includes('tel:') ||
  linkString.includes('mailto:')

const Menu = () => {
  const siteGlobals = useSiteGlobals()
  return (
    <>
      <Link
        to={'/dev/about'}
        className="font-semibold uppercase text-brand-dark-blue"
      >
        About us
      </Link>
      <Link
        to={'/dev/patients'}
        className="font-semibold uppercase text-brand-dark-blue"
      >
        For patients
      </Link>
      <Link
        to={'/dev/specialties'}
        className="font-semibold uppercase text-brand-dark-blue"
      >
        Specialties
      </Link>
      {siteGlobals?.patient_portal_url ? (
        <Button as="a" href={siteGlobals.patient_portal_url}>
          Patient Portal
        </Button>
      ) : (
        <Button as="a" href={`mailto:${siteGlobals?.email}`}>
          Contact Us
        </Button>
      )}
    </>
  )
}

export const Header = ({
  description,
  image,
  primary_button_link,
  primary_button_text,
  secondary_button_link,
  secondary_button_text,
  subtitle,
  title
}: HeaderProps) => {
  const globals = useSiteGlobals()
  const location = useLocation()
  const { pathname } = location
  const showPrimaryButton = primary_button_text && primary_button_link
  const showSecondaryButton = secondary_button_text && secondary_button_link
  return (
    <>
      <header className="bg-brand-light-blue lg:rounded-4xl p-8 sm:p-12 lg:pb-36 xl:pb-48 gap-14 lg:gap-40 lg:mx-10 lg:mt-10 xl:mx-14 xl:mt-14 flex flex-col mb-20 relative overflow-hidden">
        <Image
          imageId={image}
          className="h-full w-full object-cover absolute left-0 top-0 opacity-20 grayscale"
        />
        <div className="absolute top-0 left-0 hero-background h-full w-full"></div>
        <div className="flex flex-row justify-between items-center font-varela z-20">
          <Link
            className="font-semibold uppercase text-sm text-brand-dark-blue"
            to="/dev"
          >
            <HorizontalLogo fill="#232E63" className="w-36 sm:w-40 md:w-64" />
          </Link>
          <label
            className="lg:hidden relative z-40 cursor-pointer px-3 py-6"
            htmlFor="mobile-menu"
          >
            <input className="peer hidden" type="checkbox" id="mobile-menu" />
            <div className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
            <div className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
              &nbsp;
            </div>
            <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
              <div className="float-right z-30 min-h-full w-[85%] bg-white px-12 pt-24 md:px-24 md:pt-28 shadow-2xl">
                <menu className="flex flex-col md:text-4xl gap-5 md:gap-10">
                  <Menu />
                </menu>
              </div>
            </div>
          </label>
          <nav className="hidden lg:flex flex-row gap-5 items-center justify-center text-sm">
            <Menu />
          </nav>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6 lg:ml-20 xl:ml-36 z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl w-full sm:w-3/5 lg:w-auto lg:max-w-xl text-brand-dark-blue font-bold font-varela">
            {title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-5">
            {showPrimaryButton && (
              <Button
                {...(isHref(primary_button_link)
                  ? {
                      as: 'a',
                      href: primary_button_link
                    }
                  : { as: 'button' })}
              >
                {primary_button_text}
              </Button>
            )}
            {showSecondaryButton && (
              <Button
                variant="outline"
                {...(isHref(secondary_button_link)
                  ? {
                      as: 'a',
                      href: secondary_button_link
                    }
                  : { as: 'button' })}
              >
                {secondary_button_text}
              </Button>
            )}
          </div>
        </div>{' '}
      </header>
      {pathname === '/dev' &&
        globals?.announcement_title &&
        globals.announcement_description && (
          <div className="lg:mx-10 xl:mx-14 -mt-32 bg-brand-light-blue rounded-b-4xl px-10 py-10 pt-20 mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
              {globals.announcement_image && (
                <div className="col-span-1 bg-brand-light-blue md:flex items-center self-start justify-center rounded-2xl w-full pb-full relative overflow-hidden hidden">
                  <Image
                    className="h-full w-full object-cover object-top absolute left-0 top-0"
                    imageId={globals.announcement_image}
                  />
                </div>
              )}
              <div className="lg:col-span-3 xl:col-span-4 text-left">
                <h3 className="text-brand-dark-blue font-bold text-3xl font-varela mb-2">
                  {globals.announcement_title}
                </h3>
                <p className="text-lg text-brand-dark-blue font-light font-varela">
                  {globals.announcement_description}
                </p>
              </div>
            </div>
          </div>
        )}
      {subtitle && description && (
        <div className="space-y-5 mb-16 text-center flex flex-col items-center mx-5">
          <h2 className=" text-brand-dark-purple font-semibold text-sm uppercase font-varela">
            {subtitle}
          </h2>
          <p className="text-2xl text-brand-dark-blue font-light max-w-prose leading-relaxed font-varela">
            {description}
          </p>
          <Divider />
        </div>
      )}
    </>
  )
}
