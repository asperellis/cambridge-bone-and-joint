import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Divider, Section } from '../../components'

export const Patients = () => {
  const globals = useSiteGlobals()
  const patientsPageData = globals?.pages['patients']

  if (!patientsPageData) {
    return
  }

  return (
    <PageLayout {...patientsPageData}>
      <Section title="Education" subtitle="Stay informed">
        Education content here
      </Section>
      <Divider />
      <Section title="Testimonials" subtitle="Hear from other patients">
        Testimonials here
      </Section>
    </PageLayout>
  )
}
