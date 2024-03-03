export interface WordpressCustomAPIResponse<T> {
  id: number
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

export interface MediaSize {
  file: string
  height: number
  mime_type: string
  source_url: string
  width: number
}

export interface MediaRendered {
  rendered: string
}

export interface Media {
  acf: []
  alt_text: string
  author: number
  caption: MediaRendered
  comment_status: string
  date: string
  date_gmt: string
  description: MediaRendered
  guid: MediaRendered
  id: number
  link: string
  media_details: {
    width: number
    height: number
    file: string
    filesize: number
    sizes: {
      full: MediaSize
      large: MediaSize
      medium: MediaSize
      medium_large: MediaSize
      thumbnail: MediaSize
    }
    image_meta: {
      aperture: string
      camera: string
      caption: string
      copyright: string
      created_timestamp: string
      credit: string
      focal_length: string
      iso: string
      keywords: []
      orientation: string
      shutter_speed: string
      title: string
    }
  }
  media_type: string
  meta: []
  mime_type: string
  modified: string
  modified_gmt: string
  ping_status: string
  post: number
  slug: string
  source_url: string
  status: string
  template: string
  title: MediaRendered
  type: string
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
  email: string
  mapsUrl: string
  fax_number: string
  announcement_title: string
  announcement_description: string
  announcement_image: number | string | null
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
  document: number | null | string
}

export interface Employee extends NameAndDescription {
  id: number
  role: string
  image: number | null
}

export interface Specialty extends NameAndDescription {
  image: number | null
}
