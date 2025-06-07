import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with React and Tailwind CSS, featuring dark/light mode toggle and smooth animations.",
      tags: ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Python Card Game Bot",
      description: "A Python-based bot for card games with fintech integration, allowing for automated gameplay and financial transactions.",
      tags: ["Python", "API Integration", "Fintech"]
    },
    {
      title: "AI-Powered Chatbot",
      description: "A chatbot that helps students with various topics including music, philosophy, and coding using the Gemini API.",
      tags: ["Python", "Gemini API", "NLP"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white px-4 text-center">
                  {project.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

