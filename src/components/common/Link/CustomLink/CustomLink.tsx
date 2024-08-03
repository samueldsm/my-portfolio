import Link from 'next/link'

interface CustomLinkProps {
  href: string
  children: React.ReactNode
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  return <Link href={href}>{children}</Link>
}

export default CustomLink
