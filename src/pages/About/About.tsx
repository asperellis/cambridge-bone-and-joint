import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Button, Divider, Employees, Image, Section } from '../../components'
import { useGetEmployees } from '../../service'
import PhotoAlbum from 'react-photo-album'

export const About = () => {
  const globals = useSiteGlobals()
  const { data: employees } = useGetEmployees()
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
            <Image
              className="h-full w-full object-cover object-top absolute left-0 top-0"
              imageId={150}
            />
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
      <Divider />
      <Section title="Our facilities" subtitle="Take a tour">
        <PhotoAlbum
          layout="masonry"
          columns={(containerWidth) => {
            if (containerWidth < 800) return 1
            if (containerWidth < 1200) return 2
            return 3
          }}
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div style={wrapperStyle} className="relative">
              {renderDefaultPhoto({ wrapped: true })}
              {photo?.title && (
                <caption className="absolute bottom-0 left-0 bg-brand-light-blue font-varela font-semibold text-brand-dark-blue text-xs p-2 right-0">
                  {photo.title}
                </caption>
              )}
            </div>
          )}
          photos={[
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/2024/02/image1.jpg',
              width: 1999,
              height: 1333
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/2024/01/patients-hero.jpg',
              width: 1396,
              height: 684
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/2024/01/hero-test.jpg',
              width: 1396,
              height: 684
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/finals-153.jpg',
              width: 1000,
              height: 667
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/finals-236.jpg',
              width: 1000,
              height: 667
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/finals-264.jpg',
              width: 1000,
              height: 667,
              title: 'X-ray on site for accurate diagnosis and quick care'
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/finals-282.jpg',
              width: 1000,
              height: 667,
              title:
                'Casting available on site, including waterproof for certain injuries'
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/2024/02/image2.jpg',
              width: 1999,
              height: 1333
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/finals-286.jpg',
              width: 1000,
              height: 667
            },
            {
              src: 'http://cambridgeboneandjoint.com/development/wp-content/uploads/finals-305.jpg',
              width: 1000,
              height: 667,
              title:
                'Full line of bracing, boots, crutches and splints for treating a wide range of injuries.'
            }
          ]}
        />
      </Section>
    </PageLayout>
  )
}
