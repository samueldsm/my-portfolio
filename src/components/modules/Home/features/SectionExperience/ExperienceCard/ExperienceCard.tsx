import Link from 'next/link'

import { Card } from '@nextui-org/react'
import { FiExternalLink } from 'react-icons/fi'
import Skills from '@/components/common/Skills/Skills'
import { Experience } from '../../../types'

const ExperienceCard: React.FC<Experience> = ({
  period,
  title,
  company,
  description,
  skills,
  links
}) => {
  return (
    <Card className="bg-[#112240] mb-8 p-6">
      <p className="text-[#8892b0] mb-2">{period}</p>
      <h3 className="text-white mb-1 flex flex-wrap">
        {title} {` · `}
        <Link
          href={company.url}
          className="text-[#64ffda] flex flex-row ps-1 gap-2 items-center hover:text-[#50ccaf]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {company.name}
          <FiExternalLink size={16} />
        </Link>
      </h3>
      <p className="mb-4 text-[#94a3b8]">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, i) => (
          <Skills key={i} skill={skill} />
        ))}
      </div>
      {links && (
        <div className="flex gap-4">
          {links.map((link, i) => (
            <Link key={i} href={link.url} className="text-[#64ffda] text-sm">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </Card>
  )
}

export default ExperienceCard
