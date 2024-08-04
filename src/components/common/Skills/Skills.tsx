interface SkillsProps {
  skill: string
}
const Skills = ({ skill }: SkillsProps) => {
  return (
    <span className="bg-[#2dd4bf1a] px-3 py-1 rounded-xl text-[#5eead4] text-sm">
      {skill}
    </span>
  )
}

export default Skills
