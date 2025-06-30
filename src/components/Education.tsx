import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Raj Kumar Goel Institute Of Technology & Managment, Ghaziabad',
    period: '2022 - 2026',
    score: '70%',
  },
  {
    degree: 'Intermediate (XII)',
    institution: 'Nirmala Inter College, Maharajganj',
    period: '2019 - 2021',
    score: '80%',
  },
  {
    degree: 'High School (X)',
    institution: "Nirmala Inter College, Maharajganj",
    period: '2017 - 2019',
    score: '85.6%',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation.">Education</SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
