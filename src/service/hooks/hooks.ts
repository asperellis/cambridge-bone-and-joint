import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS, api } from '../api'
import { Employee, Media, Page } from '../../types'

export const useGetEducations = () => {
  return useQuery({
    queryKey: QUERY_KEYS.education,
    queryFn: async () => api.getEducations(),
    select: (data) => data.map((d) => d.acf)
  })
}

export const useGetEmployees = () => {
  return useQuery({
    queryKey: QUERY_KEYS.employees,
    queryFn: async () => api.getEmployees(),
    select: (data): Employee[] =>
      data.map((d) => ({
        ...d.acf,
        id: d.id
      }))
  })
}

export const useGetFacilities = () => {
  return useQuery({
    queryKey: QUERY_KEYS.facilities,
    queryFn: async () => api.getFacilities(),
    select: (data) => data.map((d) => d.acf)
  })
}

export const useGetPage = (page: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.page(page),
    queryFn: async () => api.getPage(page),
    select: (data) => data.map((d) => d.acf)[0]
  })
}

export const useGetPages = () => {
  return useQuery({
    queryKey: QUERY_KEYS.pages,
    queryFn: async () => api.getPages(),
    select: (data): Record<string, Page> =>
      data
        .filter((page) => page.slug !== 'site-settings')
        .reduce(
          (pageData, page) => ({ ...pageData, [page.slug]: page.acf }),
          {}
        )
  })
}

export const useGetSiteGlobals = () => {
  return useQuery({
    queryKey: QUERY_KEYS.page('site-settings'),
    queryFn: async () => api.getSiteGlobals(),
    select: (data) => data.map((d) => d.acf)[0]
  })
}

export const useGetSpecialties = () => {
  return useQuery({
    queryKey: QUERY_KEYS.specialties,
    queryFn: async () => api.getSpecialties(),
    select: (data) => data.map((d) => d.acf)
  })
}

export const useGetTestimonials = () => {
  return useQuery({
    queryKey: QUERY_KEYS.testimonials,
    queryFn: async () => api.getTestimonials(),
    select: (data) => data.map((d) => d.acf)
  })
}

export const useGetMedia = () => {
  return useQuery({
    queryKey: QUERY_KEYS.media,
    queryFn: async () => api.getMedia(),
    select: (data) =>
      data.reduce((mediaMap, currentMedia) => {
        mediaMap.set(String(currentMedia.id), currentMedia)
        return mediaMap
      }, new Map<string, Media>())
  })
}

export const useGetMediaById = (id?: string | number | null) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.media, id],
    queryFn: async () => api.getMediaById(id),
    enabled: Boolean(id)
  })
}
