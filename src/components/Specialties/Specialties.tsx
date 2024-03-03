import React from 'react'
import { Specialty } from '../../types'
import { Section } from '../Section'
import { Image } from '../Image/Image'

export interface SpecialtiesProps {
  className?: string
  specialties: Specialty[]
}

export const Specialties = ({ className, specialties }: SpecialtiesProps) => {
  return (
    <Section
      title="Our specialties"
      subtitle="What we can do for you"
      className={className}
    >
      <ul className="grid lg:grid-cols-3 gap-10">
        {specialties.map((specialty) => (
          <li key={specialty.name} className="flex items-center flex-col">
            <div className="col-span-2 bg-brand-light-blue flex items-center self-center justify-center rounded-2xl w-full pb-full lg:w-3/4 lg:pb-3/4 mb-10 relative overflow-hidden">
              <Image
                imageId={specialty?.image}
                className="h-full w-full object-cover object-left-top absolute left-0 top-0"
              />
            </div>
            <h4 className="font-varela text-brand-dark-purple text-xl font-semibold mb-3">
              {specialty.name}
            </h4>
            <p className="font-varela text-brand-dark-blue text-lg">
              {specialty.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
