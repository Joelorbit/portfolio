import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const WorkExperience = () => {
  const { theme } = useContext(ThemeContext);
  
  const experiences = [
    {
      title: "Python Card Game Bot Developer",
      period: "2023 - Present",
      description: "Building a Python bot for card games by integrating fintech solutions. The project involves developing algorithms for game strategy and implementing financial transaction capabilities."
    },
    {
      title: "AI Chatbot Developer",
      period: "2023 - Present",
      description: "Developed a chatbot that helps students with music, philosophical ideas, coding, and various other topics. The chatbot utilizes the Gemini API for generating responses and providing assistance."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Work Experience
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-purple-500 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="mb-12 relative animate-on-scroll"
              >
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-purple-500 bg-white dark:bg-gray-900"></div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {exp.title}
                </h3>
                
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                  {exp.period}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

