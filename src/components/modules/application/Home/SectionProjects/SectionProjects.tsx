import Image from 'next/image'
import { Card, Link } from '@nextui-org/react'
import HeadingText from '@/components/common/Title/HeadingText'
import Skills from '@/components/common/Skills/Skills'

interface Project {
  year: string
  title: string
  description: string
  skills: string[]
  stars?: number
  image?: string
  link: string
}

const projects: Project[] = [
  {
    year: '2024',
    title: 'Dental Laboratory',
    description: `A comprehensive web application designed for a US-based dental laboratory. This application aims to automate case number assignment by downloading the online form, thereby improving physicians' workflow, online presence, and overall efficiency through an intuitive design.`,
    skills: ['TypeScript', 'Next.js', 'NextUI', 'Tailwind CSS', 'MongoDB'],
    image: '/assets/images/projects/a-teeth-lab-prescription.jpg',
    link: 'https://ateethlabprescription.vercel.app/'
  },
  {
    year: '2023',
    title: 'Manage Posts',
    description: `This project represents my first foray into NextUI.js, where I developed a comprehensive CRUD application. It showcases my ability to manage APIs effectively and integrate Redux for state management. The application was designed to streamline content management processes, making it easier for users to create, read, update, and delete posts.`,
    skills: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'API',
      'Redux',
      'TypeScript'
    ],
    image: '/assets/images/projects/manage-posts.jpg',
    link: 'https://manage-posts-eta.vercel.app/'
  }
]
const SectionProjects = () => {
  return (
    <section id="PROJECTS" className="mb-16">
      <HeadingText text="Projects" />
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="p-6 bg-inherit shadow-none hover:bg-[#13233f]">
              <div className="flex justify-between items-start mb-4 flex-col md:flex-row">
                <div>
                  <p className="text-[#64ffda] mb-2">{project.year}</p>
                  <h3 className="text-white mb-2">{project.title}</h3>
                  <p className="mb-4 text-[#94a3b8]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 ">
                    {project.skills.map((skill, i) => (
                      <Skills key={i} skill={skill} />
                    ))}
                  </div>
                </div>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="rounded w-60 h-32 md:w-32 md:h-16 "
                  />
                )}
              </div>
              {project.stars && (
                <p className="text-[#8892b0]">★ {project.stars}</p>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SectionProjects
