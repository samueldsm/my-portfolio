import HeadingText from '@/components/common/Title/HeadingText'

import ExperienceCard from './ExperienceCard/ExperienceCard'
import { experiences } from '../../data'

const SectionExperience: React.FC = () => {
  return (
    <section id="EXPERIENCE" className="mb-16">
      <HeadingText text="Experience" />
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  )
}

export default SectionExperience
