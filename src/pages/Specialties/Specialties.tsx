import React from 'react'
import { PageLayout } from '../../layouts'
import { useSiteGlobals } from '../../context'
import { Specialties as SpecialtiesList } from '../../components'
import { useGetSpecialties } from '../../service'

export const Specialties = () => {
  const globals = useSiteGlobals()
  const specialtiesPageData = globals?.pages['specialties']
  const { data: specialties } = useGetSpecialties()

  if (!specialtiesPageData) {
    return
  }

  return (
    <PageLayout {...specialtiesPageData}>
      {specialties?.length ? (
        <SpecialtiesList specialties={specialties} />
      ) : null}
    </PageLayout>
  )
}
