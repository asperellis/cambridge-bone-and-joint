import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Button, Divider, Section } from '../../components'
import {
  useGetEducations,
  useGetMedia,
  useGetTestimonials
} from '../../service'

export const Patients = () => {
  const globals = useSiteGlobals()
  const { data: media } = useGetMedia()
  const logo = media ? media.get(String(153)) : undefined
  const patientsPageData = globals?.pages['patients']
  const { data: educations } = useGetEducations()
  const { data: testimonials } = useGetTestimonials()
  if (!patientsPageData) {
    return
  }

  return (
    <PageLayout {...patientsPageData}>
      <Section title="Wellness programs" subtitle="Prescribe FIT">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 md:gap-10 xl:gap-20">
          <div className="col-span-2 flex flex-col items-center self-start justify-center mb-10">
            {logo && <img src={logo.source_url} />}
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/qRX6fv489m4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lg:col-span-2 xl:col-span-3 text-left">
            <h5 className="text-brand-dark-purple font-bold text-lg font-varela mb-5">
              Small Lifestyle Changes Can Make a Big Impact on Your Health
            </h5>
            <p className="font-varela text-brand-dark-blue text-md mb-10 max-w-prose">
              Cambridge Bone and Joint now offers a virtual lifestyle health
              coaching called Prescribe FIT to extend our services beyond the
              office and further our commitment to providing high-quality,
              comprehensive orthopedic care. We believe that traditional
              medicine—when paired with simple changes to nutrition, physical
              activity, and lifestyle—can have a transformative impact on our
              patients&apos; overall health.
            </p>
            <h5 className="text-brand-dark-purple font-bold text-lg font-varela my-5">
              Why Prescribe FIT?
            </h5>
            <p className="font-varela text-brand-dark-blue text-md mb-10 max-w-prose">
              With Prescribe FIT, our patients will be paired with a health
              coach who will provide personalized guidance to improve their
              health at home by focusing on the root causes of their orthopedic
              conditions. This innovative lifestyle health coaching program
              focuses on improving each patient&apos;s daily habits—such as
              nutrition and physical activity—to build sustainable healthy
              practices that will help our patients reduce pain, improve
              mobility, decrease weight, and better prepare for and recover from
              surgery. These lifestyle modifications are especially valuable for
              musculoskeletal (MSK) issues, where weight loss is a leading
              recommendation for improving chronic conditions. Eligible for
              Insurance Coverage Prescribe FIT is also covered by insurance
              through Medicare, Medicaid, and most commercial insurance
              carriers. Our team can help patients confirm their benefits
              eligibility and financial responsibility prior to enrollment.
              Reduce Pain & Improve Mobility with Prescribe FIT Cambridge Bone
              and Joint is committed to offering high-quality surgical and
              non-surgical care for injuries and conditions affecting the
              musculoskeletal system. That is why we are partnering with
              Prescribe FIT to offer their proven at-home lifestyle coaching
              program.
            </p>
            <div className="flex flex-row gap-5">
              <Button
                as="a"
                href="https://pace.prescribefit.com/pace/referral/new"
                className="flex-1 md:max-w-max"
              >
                ENROLL NOW
              </Button>
              <Button
                as="a"
                href="https://www.prescribefit.com/patients/"
                className="flex-1 md:max-w-max"
                variant="outline"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Divider />
      {educations?.length ? (
        <>
          <Section title="Education" subtitle="Stay informed">
            <ul className="grid lg:grid-cols-3 items-center gap-10">
              {educations.map((education) => (
                <li key={education.title}>
                  <h4 className="font-varela text-brand-dark-purple text-xl font-semibold mb-3">
                    {education.title}
                  </h4>
                  <p className="font-varela text-brand-dark-blue text-lg mb-5">
                    {education.content}
                  </p>
                  <Button
                    as="a"
                    href={education.link}
                    className=""
                    variant="outline"
                  >
                    Learn more
                  </Button>
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
