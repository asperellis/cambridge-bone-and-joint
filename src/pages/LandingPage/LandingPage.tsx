import React from 'react'

import { Logo } from '../../components'

export const LandingPage = () => {
  return (
    <main
      className="h-screen w-screen p-8 sm:p-10 flex flex-col items-center font-montserrat text-white text-center justify-between"
      style={{
        backgroundColor: 'rgb(35,46,99)',
        background:
          'linear-gradient(0deg, rgba(35,46,99,1) 0%, rgba(96,94,169,1) 30%, rgba(97,200,214,1) 100%)'
      }}
    >
      <div className="text-sm bg-white rounded-full py-2 px-4 font-bold uppercase  text-brand-dark-blue">
        Opening November 1, 2023
      </div>
      <div className="text-center flex flex-col items-center">
        <Logo fill="white" className="self-center" width={250} />
        <div className="pt-6 border-t mt-6">
          <div className="text-2xl mb-1 font-bold">Dr. Vanessa Voytko</div>
          <div className="text-sm sm:text-base mb-1">
            Orthopedic Surgery and Sports Medicine
          </div>
          <address className="text-sm sm:text-base mb-1">
            1454 Clark Street, Cambridge OH, 43725
          </address>
          <div className="text-sm sm:text-base">
            <a href="tel:7404398886">For enquiries call: (740) 439-8886</a>
          </div>
        </div>
      </div>
      <div className="text-sm bg-white rounded-full py-2 px-4 font-bold uppercase text-brand-dark-blue">
        A PGSEO affiliate practice
      </div>
    </main>
  )
}
