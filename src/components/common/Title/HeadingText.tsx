interface HeadingTextProps {
  text: string
}
const HeadingText = ({ text }: HeadingTextProps) => {
  return (
    <h2 className="text-xl font-bold pb-3 uppercase flex lg:hidden">{text}</h2>
  )
}

export default HeadingText
