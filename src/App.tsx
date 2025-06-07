import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Ideas from './components/sections/Ideas';
import Interests from './components/sections/Interests';
import Contact from './components/sections/Contact';
import Certificates from './components/sections/Certificates';
import Skills from './components/sections/Skills';
import WorkExperience from './components/sections/WorkExperience';
import ThemeToggle from './components/ThemeToggle';
import AnimationInitializer from './components/AnimationInitializer';
import { ThemeProvider } from './context/ThemeContext';
import './animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <AnimationInitializer />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Certificates />
          <Ideas />
          <Interests />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
