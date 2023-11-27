import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Section } from '../../components'

export const Specialties = () => {
  const globals = useSiteGlobals()
  const specialtiesPageData = globals?.pages['specialties']
  if (!specialtiesPageData) {
    return
  }

  return (
    <PageLayout {...specialtiesPageData}>
      <Section title="Our treatments" subtitle="What we can do for you">
        Specialties here
      </Section>
    </PageLayout>
  )
}
