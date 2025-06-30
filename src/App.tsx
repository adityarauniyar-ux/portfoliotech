import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from "./components/ui/CustomCursor";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Analytics />
      </div>
    </>
  );
}

export default App;
