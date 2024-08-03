'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

import CustomLink from '@/components/common/Link/CustomLink/CustomLink'

const sections = ['ABOUT', 'EXPERIENCE', 'PROJECTS']

/**
 * The `Navbar` component is a fixed navigation bar that displays the user's name, job title, and a list of navigation sections. It also includes links to the user's social media profiles.
 *
 * The component uses the `useState` and `useEffect` hooks to manage the active navigation section based on the user's scroll position. When the user scrolls, the component updates the `activeSection` state to highlight the corresponding navigation link.
 *
 * The `Navbar` component is used within the larger application to provide a consistent navigation experience for the user.
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('ABOUT')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className="w-full lg:w-1/2  lg:fixed lg:h-screen p-8 overflow-y-auto lg:py-24 ">
      <h1 className="text-4xl font-bold text-white mb-2">
        Samuel Santiesteban
      </h1>
      <h2 className="text-xl mb-4">Junior Frontend Engineer</h2>
      <p className="mb-8 max-w-sm">
        Specializing in developing interactive web applications, with a focus on
        creating seamless user experiences through thoughtful design and clean
        code.
      </p>
      <ul className="hidden lg:flex lg:flex-col">
        {sections.map((section) => (
          <li key={section} className="mb-4">
            <Link
              href={`#${section}`}
              className={`text-sm ${
                activeSection === section
                  ? 'text-[#64ffda] font-bold'
                  : 'text-gray-400'
              }`}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex mt-8 space-x-4 ">
        <CustomLink href="https://github.com/samueldsm/">
          <FaGithub className="text-gray-400 hover:text-white" size={24} />
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/samuel-david-santiesteban-macias/">
          <FaLinkedin className="text-gray-400 hover:text-white" size={24} />
        </CustomLink>
        <CustomLink href="https://x.com/SamuelSanti98">
          <FaSquareXTwitter
            className="text-gray-400 hover:text-white"
            size={24}
          />
        </CustomLink>
      </div>
    </nav>
  )
}

export default Navbar
