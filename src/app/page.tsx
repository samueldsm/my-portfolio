// app/page.tsx

import Navbar from '@/components/ui/Navbar/Navbar'
import SectionAbout from '@/components/modules/application/Home/SectionAbout/SectionAbout'
import SectionExperience from '@/components/modules/application/Home/SectionExperience/SectionExperience'
import SectionProjects from '@/components/modules/application/Home/SectionProjects/SectionProjects'

export default function PortfolioPage() {
  return (
    <div className=" text-gray-300 min-h-screen p-0 mx-auto max-w-screen-xl flex flex-col lg:flex-row">
      <Navbar />
      <main className="w-full lg:w-1/2 ml-auto p-3 md:p-8 lg:py-24">
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <footer className="text-center text-[#8892b0] text-sm">
          <p>
            Coded in Visual Studio Code by yours truly. Built with Next.js and
            Tailwind CSS, deployed with Vercel. All text is set in the Inter
            typeface.
          </p>
        </footer>
      </main>
    </div>
  )
}
