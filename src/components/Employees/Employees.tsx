import React from 'react'
import { Employee } from '../../types'
import { Section } from '../Section'
import { useGetMedia } from '../../service'

export interface EmployeesProps {
  className?: string
  employees: Employee[]
}

export const Employees = ({ className, employees }: EmployeesProps) => {
  const { data: media } = useGetMedia()
  const featuredEmployee = employees?.find((employee) => employee.id === 81)
  const featuredEmployeeImage =
    media && featuredEmployee?.image
      ? media.get(String(featuredEmployee.image))
      : undefined
  const nonFeaturedEmployees = employees?.filter(
    (employee) => employee.id !== featuredEmployee?.id
  )

  return (
    <Section
      title="Our staff"
      subtitle="Meet our experts"
      className={className}
    >
      {featuredEmployee && (
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-10 xl:gap-20">
          <div className="col-span-2 bg-brand-light-blue flex justify-center rounded-2xl w-full pb-full mb-10 relative overflow-hidden">
            {featuredEmployeeImage && (
              <img
                src={featuredEmployeeImage?.source_url}
                className="h-full w-full object-cover object-left-top absolute left-0 top-0"
              />
            )}
          </div>
          <div className="lg:col-span-2 xl:col-span-3 text-left">
            <h4 className="font-varela text-brand-dark-blue text-4xl font-semibold">
              {featuredEmployee.name}
            </h4>
            <h5 className="font-varela text-brand-dark-purple text-md mb-5">
              {featuredEmployee.role}
            </h5>
            <p className="font-varela text-brand-dark-blue text-lg mb-10">
              {featuredEmployee.description}
            </p>
          </div>
        </div>
      )}
      <ul className="grid lg:grid-cols-3 gap-10 xl:gap-20 mt-10 xl:mt-20">
        {nonFeaturedEmployees.map((employee) => {
          const employeeImage =
            media && employee?.image
              ? media.get(String(employee.image))
              : undefined
          return (
            <li className="flex flex-col" key={employee.name}>
              <div className="col-span-2 bg-brand-light-blue flex items-center self-center justify-center rounded-2xl w-full pb-full lg:w-3/4 lg:pb-3/4 mb-10 relative overflow-hidden">
                {employeeImage && (
                  <img
                    src={employeeImage?.source_url}
                    className="h-full w-full object-cover object-top absolute left-0 top-0"
                  />
                )}
              </div>
              <h4 className="font-varela text-brand-dark-blue text-2xl font-semibold">
                {employee.name}
              </h4>
              <h5 className="font-varela text-brand-dark-purple text-md mb-5">
                {employee.role}
              </h5>
              <p className="text-left font-varela text-brand-dark-blue text-lg mb-10">
                {employee.description}
              </p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
