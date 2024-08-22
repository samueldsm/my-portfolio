// app/page.tsx

import Navbar from '@/components/ui/Navbar/Navbar'
import SectionAbout from '@/components/modules/Home/features/SectionAbout/SectionAbout'
import SectionExperience from '@/components/modules/Home/features/SectionExperience/SectionExperience'
import SectionProjects from '@/components/modules/Home/features/SectionProjects/SectionProjects'
import Footer from '@/components/ui/Footer/Footer'

export default function PortfolioPage() {
  return (
    <>
      <SectionAbout />
      <SectionExperience />
      <SectionProjects />
    </>
  )
}
