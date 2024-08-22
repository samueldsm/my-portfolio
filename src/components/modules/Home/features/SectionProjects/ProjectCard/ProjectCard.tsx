import Link from 'next/link'
import Image from 'next/image'

import { Card } from '@nextui-org/react'

import Skills from '@/components/common/Skills/Skills'
import { Project } from '../../../types'

const ProjectCard: React.FC<Project> = ({
  year,
  title,
  description,
  skills,
  stars,
  image,
  link
}) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Card className="p-6 bg-inherit shadow-none hover:bg-[#13233f]">
        <div className="flex justify-between items-start mb-4 flex-col md:flex-row">
          <div>
            <p className="text-[#64ffda] mb-2">{year}</p>
            <h3 className="text-white mb-2">{title}</h3>
            <p className="mb-4 text-[#94a3b8]">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4 ">
              {skills.map((skill, i) => (
                <Skills key={i} skill={skill} />
              ))}
            </div>
          </div>
          {image && (
            <Image
              src={image}
              alt={title}
              width={300} // Define un ancho fijo
              height={150} // Define un alto fijo
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="rounded w-60 h-32 md:w-32 md:h-16 "
            />
          )}
        </div>
        {stars && <p className="text-[#8892b0]">★ {stars}</p>}
      </Card>
    </Link>
  )
}

export default ProjectCard
