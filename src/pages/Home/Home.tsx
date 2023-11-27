import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { useGetEmployees, useGetSpecialties } from '../../service'
import { Divider, Section, Specialties } from '../../components'

export const Home = () => {
  const globals = useSiteGlobals()
  const homePageData = globals?.pages['home']
  const { data: specialties } = useGetSpecialties()
  const { data: employees } = useGetEmployees()
  const featuredEmployee = employees?.find(
    (employee) => employee.name === 'Dr. Vanessa Voytko'
  )
  if (!homePageData) {
    return
  }

  return (
    <PageLayout {...homePageData}>
      {specialties && <Specialties specialties={specialties.slice(0, 3)} />}
      <Divider />
      {featuredEmployee && (
        <Section title="Our staff" subtitle="Meet our experts">
          <>{featuredEmployee.name}</>
        </Section>
      )}
    </PageLayout>
  )
}
