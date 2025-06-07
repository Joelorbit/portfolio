import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Ideas = () => {
  const { theme } = useContext(ThemeContext);
  
  const ideas = [
    {
      title: "AI-Powered Learning Assistant",
      description: "A personalized learning assistant that adapts to individual learning styles and provides customized educational content."
    },
    {
      title: "Blockchain-Based Credential System",
      description: "A secure and transparent system for verifying educational credentials using blockchain technology."
    },
    {
      title: "Collaborative Coding Platform",
      description: "A platform that allows multiple developers to work on the same codebase in real-time with integrated communication tools."
    }
  ];

  return (
    <section id="ideas" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Ideas & Concepts
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {ideas.map((idea, index) => (
            <div 
              key={index} 
              className="mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                {idea.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300">
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ideas;

