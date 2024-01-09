import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { useGetEmployees, useGetSpecialties } from '../../service'
import { Button, Divider, Section, Specialties } from '../../components'
import { Link } from 'react-router-dom'

export const Home = () => {
  const globals = useSiteGlobals()
  const homePageData = globals?.pages['home']
  const { data: specialties } = useGetSpecialties()
  const { data: employees } = useGetEmployees()
  const featuredEmployee = employees?.find((employee) => employee.id === 81)
  if (!homePageData) {
    return
  }

  return (
    <PageLayout {...homePageData}>
      {specialties && <Specialties specialties={specialties.slice(0, 3)} />}
      <Divider />
      {featuredEmployee && (
        <Section
          title="Our staff"
          subtitle="Meet our experts"
          className="xl:mx-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-20">
            <div className="col-span-2 bg-brand-light-blue rounded-2xl h-full"></div>
            <div className="col-span-3 text-left">
              <h4 className="font-varela text-brand-dark-blue text-4xl font-semibold">
                {featuredEmployee.name}
              </h4>
              <h5 className="font-varela text-brand-dark-purple text-md mb-5">
                {featuredEmployee.role}
              </h5>
              <p className="font-varela text-brand-dark-blue mb-10">
                {featuredEmployee.description}
              </p>
              <Link to={'/dev/about'}>
                <Button variant="outline">Our staff</Button>
              </Link>
            </div>
          </div>
        </Section>
      )}
    </PageLayout>
  )
}
