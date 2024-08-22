import HeadingText from '@/components/common/Title/HeadingText'

import ProjectCard from './ProjectCard/ProjectCard'
import { projectsData } from '../../data'

const SectionProjects: React.FC = () => {
  return (
    <section id="PROJECTS" className="mb-16">
      <HeadingText text="Projects" />
      <div className="grid grid-cols-1 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default SectionProjects
