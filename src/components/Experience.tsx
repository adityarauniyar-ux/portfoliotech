import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "AI/Machine Learning Intern",
    company: "Edunet Foundation",
    period: "Apr 2025 - May 2025",
    description: `Selected for a 4 week internship focused on AI technologies.
    I developed a Multi class animal recognition project for wildlife conservation.
    gained practical exposure to ML libraries and tools, including Tenser Flow.`,
    skills: ["Tensor Flow"],
  },
  {
    title: "Full Stack Development Intern",
    company: "Pregrad",
    period: "Dec 2024 - Feb 2024",
    description: `Developed and maintained dynamic Hospital Managment System using the MERN stack for seamless user experience. 
    Designed and developed a real-time interactive dashboard with the feture of Appointment & Scheduling, Admin Dashboard, Doctor & Staff Management etc. 
    Implemented responsive web design principles, ensuring an optimal mobile-friendly user experience.`,
    skills: ["Next.js", "MongoDB", "Git", "TailwindCSS", "react.js"],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="From classrooms to codebases — applying knowledge where it matters most.">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
