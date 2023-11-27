import React from 'react'
import { Page } from '../../types'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { Divider } from '../Divider'

export interface HeaderProps extends Page {}

export const Header = ({
  description,
  primary_button_link,
  primary_button_text,
  secondary_button_link,
  secondary_button_text,
  subtitle,
  title
}: HeaderProps) => {
  const showPrimaryButton = primary_button_text && primary_button_link
  const showSecondaryButton = secondary_button_text && secondary_button_link
  return (
    <>
      <header className="bg-brand-light-blue rounded-3xl p-10 mx-5 mt-5 flex flex-col mb-20">
        <div className="flex flex-row justify-between items-center">
          <Link
            className="font-semibold uppercase text-sm text-brand-dark-blue"
            to="/"
          >
            CBJ Horizontal Logo
          </Link>
          <nav className="flex flex-row gap-5 items-center justify-center">
            <Link
              to={'/about'}
              className="font-semibold uppercase text-sm text-brand-dark-blue"
            >
              About us
            </Link>
            <Link
              to={'/patients'}
              className="font-semibold uppercase text-sm text-brand-dark-blue"
            >
              For patients
            </Link>
            <Link
              to={'/specialties'}
              className="font-semibold uppercase text-sm text-brand-dark-blue"
            >
              Specialties
            </Link>
            <Button>Patient Portal</Button>
          </nav>
        </div>
        <div className="flex-1 px-20 py-28 flex flex-col justify-center gap-6">
          <h1 className="text-7xl w-1/3 text-brand-dark-blue font-bold">
            {title}
          </h1>
          <div className="flex flex-row gap-5">
            {showPrimaryButton && <Button>{primary_button_text}</Button>}
            {showSecondaryButton && (
              <Button variant="outline">{secondary_button_text}</Button>
            )}
          </div>
        </div>
      </header>
      {subtitle && description && (
        <div className="space-y-5 text-center flex flex-col items-center">
          <h2 className=" text-brand-dark-purple font-semibold text-sm uppercase mb-1">
            {subtitle}
          </h2>
          <p className="text-2xl text-brand-dark-blue font-light max-w-prose leading-relaxed">
            {description}
          </p>
          <Divider />
        </div>
      )}
    </>
  )
}
