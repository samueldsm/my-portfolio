import HeadingText from '@/components/common/Title/HeadingText'

interface Highlight {
  text: string
  highlights: string[]
}

const highlightsData: Highlight[] = [
  {
    text: "As a dedicated software engineer with over a year of hands-on experience in web development, I specialize in creating scalable and user-centric applications. My journey began during university studies, where I discovered a passion for problem-solving and innovation. Since then, I've become proficient in modern web technologies, focusing on writing high-quality, maintainable code.",
    highlights: [
      'software engineer',
      'scalable',
      'user-centric',
      'high-quality',
      'maintainable'
    ]
  },
  {
    text: 'Discipline and responsibility are values I hold dear, aiming to enhance developer productivity and implement best practices in software development. I am always looking to grow, adapting to new technologies and challenges, and contributing significantly to teams and projects. I believe in the importance of community and knowledge sharing, ready to bring my skills and passions to new projects, offering not just coding excellence but also effective leadership and collaboration.',
    highlights: [
      'Discipline',
      'responsibility',
      'best practices',
      'coding excellence'
    ]
  }
]

const HighlightedText: React.FC<{ text: string; highlights: string[] }> = ({
  text,
  highlights
}) => {
  const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'))

  return (
    <p className="mb-4 text-[#94a3b8]">
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            highlights.includes(part) ? 'font-bold text-[#e2e8f0]' : ''
          }
        >
          {part}
        </span>
      ))}
    </p>
  )
}

const SectionAbout: React.FC = () => {
  return (
    <section id="ABOUT" className="mb-16">
      <HeadingText text="About" />
      {highlightsData.map((highlight, index) => (
        <HighlightedText key={index} {...highlight} />
      ))}
    </section>
  )
}

export default SectionAbout
