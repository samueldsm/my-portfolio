export interface Project {
  year: string
  title: string
  description: string
  skills: string[]
  stars?: number
  image?: string
  link: string
}

export interface ILink {
  name: string
  url: string
}

export interface Experience {
  period: string
  title: string
  company: ILink
  description: string
  skills: string[]
  links?: ILink[]
}
