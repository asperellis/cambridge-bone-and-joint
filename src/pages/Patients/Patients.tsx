import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Divider, EducationLink, Section } from '../../components'
import { useGetEducations, useGetTestimonials } from '../../service'

export const Patients = () => {
  const globals = useSiteGlobals()
  const patientsPageData = globals?.pages['patients']
  const { data: educations } = useGetEducations()
  const { data: testimonials } = useGetTestimonials()
  if (!patientsPageData) {
    return
  }

  return (
    <PageLayout {...patientsPageData}>
      {educations?.length ? (
        <>
          <Section title="Education" subtitle="Stay informed">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-10">
              {educations.map((education) => (
                <li key={education.document}>
                  <EducationLink education={education} />
                </li>
              ))}
            </ul>
          </Section>
          <Divider />
        </>
      ) : null}
      {testimonials?.length ? (
        <Section title="Testimonials" subtitle="Hear from others">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-10">
            {testimonials.map((testimonial) => (
              <blockquote
                className="text-lg italic font-semibold text-brand-dark-blue max-w-prose bg-brand-light-blue rounded-xl px-10 py-5"
                key={testimonial.speaker}
              >
                <svg
                  className="w-10 h-10 text-brand-dark-blue mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <p>&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="text-right mt-5 italic opacity-75">
                  {testimonial.speaker}
                </div>
              </blockquote>
            ))}
          </div>
        </Section>
      ) : null}
    </PageLayout>
  )
}
