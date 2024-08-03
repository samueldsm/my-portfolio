import HeadingText from '@/components/common/Title/HeadingText'

const SectionAbout = () => {
  return (
    <section id="ABOUT" className="mb-16">
      <HeadingText text="About" />
      <p className="mb-4">
        As a dedicated
        <span className="text-[#64ffda]">{` software engineer `}</span> with
        over a year of hands-on experience in web development, I specialize in
        creating
        <span className="text-[#64ffda]">{` scalable `}</span> and
        <span className="text-[#64ffda]">{` user-centric `}</span>
        {`applications. My journey began during university studies, where I
        discovered a passion for problem-solving and innovation. Since then,
        I've become proficient in modern web technologies, focusing on writing`}
        <span className="text-[#64ffda] *:">{` high-quality `}</span>,{' '}
        <span className="text-[#64ffda]">{` maintainable `}</span>
        code.
      </p>
      <p className="mb-4">
        <span className="text-[#64ffda]">{` Discipline `}</span> and
        <span className="text-[#64ffda]">{` responsibility `}</span> are values
        I hold dear, aiming to enhance developer productivity and implement{' '}
        <span className="text-[#64ffda]">{` best practices `}</span> in software
        development. I am always looking to grow, adapting to new technologies
        and challenges, and contributing significantly to teams and projects. I
        believe in the importance of community and knowledge sharing, ready to
        bring my skills and passions to new projects, offering not just
        <span className="text-[#64ffda]">{` coding excellence `}</span> but also
        effective leadership and collaboration.
      </p>
    </section>
  )
}

export default SectionAbout
