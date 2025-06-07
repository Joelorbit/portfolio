import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gray-800 dark:text-gray-100">Hello, I'm </span>
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Eyuel Getachew</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
          Software Engineering Student, Problem Solver, and Creative Thinker
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

