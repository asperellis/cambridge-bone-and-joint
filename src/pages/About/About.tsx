import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Button, Divider, Employees, Section } from '../../components'
import { useGetEmployees, useGetMedia } from '../../service'

export const About = () => {
  const globals = useSiteGlobals()
  const { data: employees } = useGetEmployees()
  const { data: media } = useGetMedia()
  const locationImage = media ? media.get(String(150)) : undefined
  const aboutPageData = globals?.pages['about']
  if (!aboutPageData) {
    return
  }

  return (
    <PageLayout {...aboutPageData}>
      {employees?.length ? <Employees employees={employees} /> : null}
      <Divider />
      <Section title="Our location" subtitle="Come visit us">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-20">
          <div className="col-span-2 bg-brand-light-blue flex items-center self-start justify-center rounded-2xl w-full pb-full mb-10 relative overflow-hidden">
            {locationImage && (
              <img
                src={locationImage?.source_url}
                className="h-full w-full object-cover object-top absolute left-0 top-0"
              />
            )}
          </div>
          <div className="lg:col-span-2 xl:col-span-3 text-left">
            <h4 className="font-varela text-brand-dark-purple text-xl font-semibold">
              Our address
            </h4>
            <address className="not-italic underline font-varela text-brand-dark-blue text-lg mb-5">
              <a href={globals?.mapsUrl}>
                {globals?.street_address}, {globals?.city} {globals?.state},{' '}
                {globals?.zip_code}
              </a>
            </address>

            <p className="font-varela text-brand-dark-blue text-lg mb-10 max-w-prose">
              Cambridge Bone and Joint is conveniently located across from the
              Ohio Health South Eastern Medical Hospital. X-rays taken on site
              to allow timely diagnosis and treatment. Digital x-ray quality for
              patient and physician review. Full line of orthopedic braces for
              all body parts in stock. Correct size application and fit for
              patients prior to leaving. Casting on site as well, including
              water proof options
            </p>
            <Button
              as="a"
              href="https://www.google.com/maps/dir//cambridge+bone+and+joint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x8837b56251cf57ad:0x329f3e08f2b29b49?sa=X&ved=2ahUKEwibrJnixJeEAxXfWUEAHV8eBPQQ9Rd6BAhEEAA"
              className="max-w-max"
              variant="outline"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
