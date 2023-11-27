export interface WordpressCustomAPIResponse<T> {
  slug: string
  acf: T
}

export interface Page {
  description: string
  image: string | null
  primary_button_link: string
  primary_button_text: string
  secondary_button_link: string
  secondary_button_text: string
  subtitle: string
  title: string
}

export interface SiteGlobals {
  patient_portal_url: string
  urgent_care_url: string
  street_address: string
  city: string
  state: string
  zip_code: string
  sunday_open: string
  monday_open: string
  tuesday_open: string
  wednesday_open: string
  thursday_open: string
  friday_open: string
  saturday_open: string
  sunday_closed: string
  monday_closed: string
  tuesday_closed: string
  wednesday_closed: string
  thursday_closed: string
  friday_closed: string
  saturday_closed: string
  phone_number: string
}

export interface Globals extends SiteGlobals {
  pages: Record<string, Page>
}

export interface NameAndDescription {
  description: string
  name: string
}

export interface Testimonial {
  speaker: string
  testimonial: string
}

export interface Facility extends NameAndDescription {}

export interface Education {
  content: string
  link: string
  title: string
}

export interface Employee extends NameAndDescription {
  role: string
}

export interface Specialty extends NameAndDescription {}
