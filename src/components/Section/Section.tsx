import React from 'react'

export interface SectionProps {
  className?: string
  children: React.ReactNode
  title: string
  subtitle: string
}

export const Section = ({
  className,
  children,
  title,
  subtitle
}: SectionProps) => {
  return (
    <section className={`${className} text-center`}>
      <h3 className="text-brand-dark-purple font-semibold text-sm uppercase mb-1">
        {title}
      </h3>
      <h4 className="mb-20 text-brand-dark-blue font-bold text-3xl">
        {subtitle}
      </h4>
      {children}
    </section>
  )
}
