import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiGraphql, SiMongodb, SiPrisma, SiCplusplus, SiGit, SiGithub, SiPostman, SiVite, SiVercel } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMysql } from "react-icons/di";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "Next.js", icon: SiNextdotjs, color: "#", url: "https://nextjs.org/" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
  
  { name: "Node.js", icon: FaNodeJs, color: "#68a063", url: "https://nodejs.org/" },
  { name: "Express.js", icon: SiExpress, color: "#68a063", url: "https://expressjs.com/" },
  { name: "SQL", icon: DiMysql, color: "#e535ab", url: "https://www.mysql.com/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
  
  { name: "Firebase", icon: IoLogoFirebase, color: "#ffca28", url: "https://firebase.google.com/" },
  
  { name: "Java", icon: FaJava, color: "#f7b731", url: "https://www.java.com/" },
  
  { name: "VS Code", icon: VscVscode, color: "#007acc", url: "https://code.visualstudio.com/" },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "# ", url: "https://github.com/" },
  
  { name: "Vite", icon: SiVite, color: "#646cff", url: "https://vitejs.dev/" },
  { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="A modern tech stack designed for impact, efficiency, and scale.">Skills</SectionTitle>

          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map((tech) => (
              <SkillCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
            ))}
          </div>

        </div>
      </section>
    </SectionBackground>
  );
}