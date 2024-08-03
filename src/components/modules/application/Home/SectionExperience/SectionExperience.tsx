import Link from 'next/link'
import { Card } from '@nextui-org/react'
import HeadingText from '@/components/common/Title/HeadingText'
interface ILink {
  name: string
  url: string
}
interface Experience {
  period: string
  title: string
  company: ILink
  description: string
  skills: string[]
  links?: ILink[]
}
const experiences: Experience[] = [
  {
    period: 'SEPT 2023 — PRESENT',
    title: 'Junior Frontend Engineer',
    company: {
      name: 'Enjoy Travel Group',
      url: 'https://www.enjoytravelgroup.com/'
    },
    description: `Build and maintain critical components used to construct Enjoy Travel Group's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to promote service offers to different destinations.`,
    skills: [
      'TypeScript',
      'ReactJS',
      'Next.Js',
      'Redux',
      'HTML & SCSS',
      'Figma',
      'Git',
      'JavaScript',
      'NextUI',
      'Talwind CSS',
      'Bootstrap',
      'Material UI'
    ]
  },
  {
    period: 'SEP 2022 — MAR 2023',
    title: 'Web Programming Professor',
    company: {
      name: 'UCI',
      url: 'https://www.uci.cu/'
    },
    description:
      'Taught comprehensive courses on web development technologies to university students. Covered topics including client-server programming, web design principles, and security in web applications. Designed and delivered hands-on projects to reinforce learning of modern web development practices. Mentored students in developing full-stack web applications, emphasizing code quality and best practices.',
    skills: [
      'HTML & CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Django',
      'Node.js',
      'Python',
      'Cybersecurity',
      'CMS'
    ]
  },
  {
    period: 'APR — AUG 2022',
    title: 'Database Systems Professor',
    company: { name: 'UCI', url: 'https://www.uci.cu/' },
    description:
      'Instructed on SQL database optimization and decision-making processes: Developed curriculum focused on ETL processes, data analysis, and report creation Taught advanced SQL optimization techniques including indexing and query optimization Introduced NoSQL concepts, with a focus on MongoDB Emphasized database design principles for improved efficiency and performance.',
    skills: ['PostgreSQL', 'MongoDB', 'JavaScript', 'MusicKit.js']
  }
]

const SectionExperience = () => {
  return (
    <section id="EXPERIENCE" className="mb-16">
      <HeadingText text="Experience" />
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-[#112240] mb-8 p-6">
          <p className="text-[#8892b0] mb-2">{exp.period}</p>
          <h3 className="text-white mb-1">
            {exp.title} {` · `}
            <Link href={exp.company.url} className="text-[#64ffda]">
              {exp.company.name}
            </Link>
          </h3>
          <p className="mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.skills.map((skill, i) => (
              <span key={i} className="bg-[#233554] px-2 py-1 rounded text-sm">
                {skill}
              </span>
            ))}
          </div>
          {exp.links && (
            <div className="flex gap-4">
              {exp.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url}
                  className="text-[#64ffda] text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </Card>
      ))}
    </section>
  )
}

export default SectionExperience
