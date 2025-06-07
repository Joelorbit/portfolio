import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Eyuel Getachew
        </a>
        
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">About</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Projects</a></li>
            <li><a href="#ideas" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Ideas</a></li>
            <li><a href="#interests" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Interests</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

