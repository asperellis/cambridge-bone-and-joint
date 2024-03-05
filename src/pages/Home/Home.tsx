import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { useGetEmployees, useGetSpecialties } from '../../service'
import { Button, Divider, Image, Section, Specialties } from '../../components'
import { Link } from 'react-router-dom'

export const Home = () => {
  const globals = useSiteGlobals()
  const homePageData = globals?.pages['home']
  const { data: specialties } = useGetSpecialties()
  const featuredSpecialty = specialties?.find((s) =>
    s.name.includes('joint replacement')
  )
  const randomSpecialties =
    specialties?.sort(() => 0.5 - Math.random()).slice(0, 3) || []
  const featuredSpecialties = randomSpecialties.find(
    (s) => s.name === featuredSpecialty?.name
  )
    ? randomSpecialties
    : featuredSpecialty
      ? [featuredSpecialty, ...randomSpecialties.slice(0, 2)]
      : randomSpecialties
  const { data: employees } = useGetEmployees()
  const featuredEmployee = employees?.find((employee) => employee.id === 81)

  if (!homePageData) {
    return
  }

  return (
    <PageLayout {...homePageData}>
      {specialties?.length ? (
        <div className="flex flex-col items-center">
          <Specialties specialties={featuredSpecialties} />
          <Link to={'/specialties'} className="mt-10 mb-10">
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
              <Image
                className="h-full w-full object-cover object-left-top absolute left-0 top-0"
                imageId={featuredEmployee?.image}
              />
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
              <Link to={'/about'}>
                <Button variant="outline">Our staff</Button>
              </Link>
            </div>
          </div>
        </Section>
      )}
      <Divider />
      <Section
        title="Cambridge Bone and Joint"
        subtitle="Here for all of your orthopedic needs"
        className="xl:mx-20"
      >
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div
            className="relative w-full"
            style={{
              paddingBottom: '56.25%',
              paddingTop: '25px',
              height: '0'
            }}
          >
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100095466914961%2Fvideos%2F332596966207785%2F&show_text=false&t=0"
              className="absolute top-0 left-0 w-full h-full"
              // style={{ border: 'none', overflow: 'hidden' }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
