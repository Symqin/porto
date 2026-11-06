import SiteFooter from '../components/layout/SiteFooter.jsx';
import SiteHeader from '../components/layout/SiteHeader.jsx';
import MusicPlayer from '../components/ui/MusicPlayer.jsx';
import AboutSection from '../features/about/AboutSection.jsx';
import ContactSection from '../features/contact/ContactSection.jsx';
import EducationSection from '../features/experience/EducationSection.jsx';
import ExperienceSection from '../features/experience/ExperienceSection.jsx';
import HeroSection from '../features/home/HeroSection.jsx';
import ProjectsSection from '../features/projects/ProjectsSection.jsx';
import SkillsSection from '../features/skills/SkillsSection.jsx';

export default function App() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <MusicPlayer />
    </>
  );
}
