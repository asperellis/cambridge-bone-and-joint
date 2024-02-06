import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { useGetEmployees, useGetMedia, useGetSpecialties } from '../../service'
import { Button, Divider, Section, Specialties } from '../../components'
import { Link } from 'react-router-dom'

export const Home = () => {
  const globals = useSiteGlobals()
  const { data: media } = useGetMedia()
  const homePageData = globals?.pages['home']
  const { data: specialties } = useGetSpecialties()
  const randomSpecialties =
    specialties?.sort(() => 0.5 - Math.random()).slice(0, 3) || []
  const { data: employees } = useGetEmployees()
  const featuredEmployee = employees?.find((employee) => employee.id === 81)
  const featuredEmployeeImage =
    media && featuredEmployee?.image
      ? media.get(String(featuredEmployee.image))
      : undefined
  if (!homePageData) {
    return
  }

  return (
    <PageLayout {...homePageData}>
      {specialties?.length ? (
        <div className="flex flex-col items-center">
          <Specialties specialties={randomSpecialties} />
          <Link to={'/dev/specialties'} className="mt-10 mb-10">
            <Button variant="outline">Our Specialties</Button>
          </Link>
        </div>
      ) : null}
      <Divider />
      {featuredEmployee && (
        <Section
          title="Our staff"
          subtitle="Meet our experts"
          className="xl:mx-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-20">
            <div className="col-span-2 bg-brand-light-blue rounded-2xl w-full pb-full mb-10 relative overflow-hidden">
              {featuredEmployeeImage && (
                <img
                  src={featuredEmployeeImage?.source_url}
                  className="h-full w-full object-cover object-left-top absolute left-0 top-0"
                />
              )}
            </div>
            <div className="col-span-3 text-left">
              <h4 className="font-varela text-brand-dark-blue text-4xl font-semibold">
                {featuredEmployee.name}
              </h4>
              <h5 className="font-varela text-brand-dark-purple text-md mb-5">
                {featuredEmployee.role}
              </h5>
              <p className="font-varela text-brand-dark-blue mb-10 text-lg">
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
