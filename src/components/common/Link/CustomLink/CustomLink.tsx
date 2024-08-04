import Link from 'next/link'

interface CustomLinkProps {
  href: string
  children: React.ReactNode
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}

export default CustomLink
