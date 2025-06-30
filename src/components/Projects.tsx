import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiJavascript
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
  javascript: { icon: SiJavascript, name: "JavaScript", color: '#f7df1e' },
};


// Define projects data
const projects = [
  
  {
    title: 'NeoCode',
    description: 'A coding platform with curated DSA sheets, roadmaps, CS articles, and a community forum for students to share resources and discuss challenges.',
    image: '/assets/neocode.webp',
    link: 'https://neocode-io.vercel.app',
    github: 'https://github.com/adityarauniyar-ux/neocode',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },
  
  {
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.',
    image: '/assets/portfolio.png',
    link: 'https://adityarauniyar-tech.vercel.app',
    github: 'https://github.com/adityarauniyar-ux/portfoliotech',
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing projects, skills, blogs, and contact section with responsive design and modern UI/UX styling.',
    image: '/assets/portfolio1.png',
    link: 'https://adityarauniyar.vercel.app',
    github: 'https://github.com/adityarauniyar-ux/portfolio',
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.javascript,
      techStacks.tailwind,
    ],
  },
  {
    title: 'Placify',
    description: 'A campus placement platform connecting students with recruiters. Features job listings, company profiles, and application tracking.',
    image: '/assets/placify.webp',
    github: 'https://github.com/adityarauniyar-ux/placify',
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },
  {
    title: 'NeoFolio',
    description: 'A portfolio website template for developers, showcasing projects and skills. Built with modern web technologies for easy customization.',
    image: '/assets/neofolio.webp',
    link: 'https://neofolio-pied.vercel.app',
    github: 'https://github.com/adityarauniyar-ux/neofolio',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.firebase,
      techStacks.framer,
    ],
  },
  {
    title: 'IntervueAI',
    description: 'The IntervueAI is a next-gen AI-powered mock interview platform built to help students and professionals prepare for interviews in a way that actually feels real.',
    image: '/assets/IntervueAI.png',
    link: 'https://intervue-ai-one.vercel.app',
    github: 'https://github.com/adityarauniyar-ux/IntervueAI',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.appwrite,
    ],
  },
  
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="Every project, a product. Every product, a solution with a story.">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        
      </div>
    </section>
  </SectionBackground>
  );
}
