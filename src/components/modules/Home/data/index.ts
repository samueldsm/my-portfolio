import { Experience, Project } from '../types'

export const projectsData: Project[] = [
  {
    year: '08-2024',
    title: 'First Portfolio',
    description: `My first personal portfolio website, built using Next.js and Tailwind CSS. This project showcases my skills, experience, and projects, providing an overview of my work and expertise.`,
    skills: ['TypeScript', 'Next.js 14', 'NextUI', 'Tailwind CSS'],
    image: '/assets/images/projects/first_portfolio.jpg',
    link: 'https://samuelsantiesteban.vercel.app/'
  },
  {
    year: '05-2024',
    title: 'Dental Laboratory',
    description: `A comprehensive web application designed for a US-based dental laboratory. This application aims to automate case number assignment by downloading the online form, thereby improving physicians' workflow, online presence, and overall efficiency through an intuitive design.`,
    skills: ['TypeScript', 'Next.js', 'NextUI', 'Tailwind CSS', 'MongoDB'],
    image: '/assets/images/projects/a-teeth-lab-prescription.jpg',
    link: 'https://ateethlabprescription.vercel.app/'
  },
  {
    year: '2023',
    title: 'Manage Posts',
    description: `This project represents my first foray into NextUI.js, where I developed a comprehensive CRUD application. It showcases my ability to manage APIs effectively and integrate Redux for state management. The application was designed to streamline content management processes, making it easier for users to create, read, update, and delete posts.`,
    skills: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'API',
      'Redux',
      'TypeScript'
    ],
    image: '/assets/images/projects/manage-posts.jpg',
    link: 'https://manage-posts-eta.vercel.app/'
  }
]

export const experiences: Experience[] = [
  {
    period: 'SEPT 2023 — PRESENT',
    title: 'Junior Frontend Engineer',
    company: {
      name: 'Enjoy Travel Group',
      url: 'https://www.enjoytravelgroup.com/'
    },
    description: `Build and maintain critical components used to construct Enjoy Travel Group's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to promote service offers to different destinations.`,
    skills: [
      'TypeScript',
      'ReactJS',
      'Next.Js',
      'Redux',
      'HTML & SCSS',
      'Figma',
      'Git',
      'JavaScript',
      'NextUI',
      'Talwind CSS',
      'Bootstrap',
      'Material UI'
    ]
  },
  {
    period: 'SEP 2022 — MAR 2023',
    title: 'Web Programming Professor',
    company: {
      name: 'UCI',
      url: 'https://www.uci.cu/'
    },
    description:
      'Taught comprehensive courses on web development technologies to university students. Covered topics including client-server programming, web design principles, and security in web applications. Designed and delivered hands-on projects to reinforce learning of modern web development practices. Mentored students in developing full-stack web applications, emphasizing code quality and best practices.',
    skills: [
      'HTML & CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Django',
      'Node.js',
      'Python',
      'Cybersecurity',
      'CMS'
    ]
  },
  {
    period: 'APR — AUG 2022',
    title: 'Database Systems Professor',
    company: { name: 'UCI', url: 'https://www.uci.cu/' },
    description:
      'Instructed on SQL database optimization and decision-making processes: Developed curriculum focused on ETL processes, data analysis, and report creation Taught advanced SQL optimization techniques including indexing and query optimization Introduced NoSQL concepts, with a focus on MongoDB Emphasized database design principles for improved efficiency and performance.',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL']
  }
]
