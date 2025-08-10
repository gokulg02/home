'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/EducationSection';
import WorkSection from './components/WorkSection';

export default function FullStackPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <nav className="sticky top-0 z-50 bg-white shadow flex justify-center gap-6 p-4 text-sm md:text-base">
        <a href="#hero" className="text-gray-600 hover:text-blue-600">Home</a>
        <a href="#education" className="text-gray-600 hover:text-blue-600">Education</a>
        <a href="#work" className="text-gray-600 hover:text-blue-600">Work Experience</a>
        <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
		<a href="/Resume_Gokul_Gandhikumar.pdf" className="text-gray-600 hover:text-blue-600">Resume</a>
      </nav>
      
      <section id="hero" className="mt-16"><HeroSection /></section>
      <section id="education"><EducationSection /></section>
      <section id="work"><WorkSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}