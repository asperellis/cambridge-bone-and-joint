import React from 'react'
import { Specialty } from '../../types'
import { Section } from '../Section'

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
          <li key={specialty.name}>{specialty.name}</li>
        ))}
      </ul>
    </Section>
  )
}
