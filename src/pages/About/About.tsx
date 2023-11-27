import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Divider, Section } from '../../components'

export const About = () => {
  const globals = useSiteGlobals()
  const aboutPageData = globals?.pages['about']
  if (!aboutPageData) {
    return
  }

  return (
    <PageLayout {...aboutPageData}>
      <Section title="Our staff" subtitle="Meet our experts">
        Employee content here
      </Section>
      <Divider />
      <Section title="Our facilities" subtitle="Take a tour">
        Facility content here
      </Section>
      <Divider />
      <Section title="Our location" subtitle="Come visit us">
        Location content here
      </Section>
    </PageLayout>
  )
}
