import axios from 'axios'
import {
  Education,
  Employee,
  Facility,
  Media,
  Page,
  SiteGlobals,
  Specialty,
  Testimonial,
  WordpressCustomAPIResponse
} from '../../types'

export const http = axios.create()

export const BASE =
  'https://cambridgeboneandjoint.com/development/wp-json/wp/v2'

export const ENDPOINTS = {
  education: `${BASE}/education`,
  employees: `${BASE}/employees`,
  facilities: `${BASE}/facilities`,
  page: `${BASE}/pages`,
  specialties: `${BASE}/specialties`,
  testimonials: `${BASE}/testimonials`,
  media: `${BASE}/media?per_page=100`
}

export const QUERY_KEYS = {
  education: ['education'] as const,
  employees: ['employees'] as const,
  facilities: ['facilities'] as const,
  page: (page: string) => ['page', page] as const,
  pages: ['pages'] as const,
  specialties: ['specialties'] as const,
  testimonials: ['testimonials'] as const,
  media: ['media'] as const
}

export const api = {
  getEducations: async () => {
    const url = ENDPOINTS.education
    const response = await http.get<WordpressCustomAPIResponse<Education>[]>(
      url
    )
    return response.data
  },
  getEmployees: async () => {
    const url = ENDPOINTS.employees
    const response = await http.get<WordpressCustomAPIResponse<Employee>[]>(url)
    return response.data
  },
  getFacilities: async () => {
    const url = ENDPOINTS.facilities
    const response = await http.get<WordpressCustomAPIResponse<Facility>[]>(url)
    return response.data
  },
  getPage: async (page: string) => {
    const url = `${ENDPOINTS.page}?slug=${page}`
    const response = await http.get<WordpressCustomAPIResponse<Page>[]>(url)
    return response.data
  },
  getPages: async () => {
    const url = ENDPOINTS.page
    const response = await http.get<WordpressCustomAPIResponse<Page[]>[]>(url)
    return response.data
  },
  getSiteGlobals: async () => {
    const url = `${ENDPOINTS.page}?slug=site-settings`
    const response = await http.get<WordpressCustomAPIResponse<SiteGlobals>[]>(
      url
    )
    return response.data
  },
  getSpecialties: async () => {
    const url = ENDPOINTS.specialties
    const response = await http.get<WordpressCustomAPIResponse<Specialty>[]>(
      url
    )
    return response.data
  },
  getTestimonials: async () => {
    const url = ENDPOINTS.testimonials
    const response = await http.get<WordpressCustomAPIResponse<Testimonial>[]>(
      url
    )
    return response.data
  },
  getMedia: async () => {
    const url = ENDPOINTS.media
    const response = await http.get<Media[]>(url)
    return response.data
  }
}
