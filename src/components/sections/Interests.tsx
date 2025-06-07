import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Interests = () => {
  const { theme } = useContext(ThemeContext);
  
  const interests = [
    {
      title: "Artificial Intelligence",
      icon: "brain",
      description: "Exploring the possibilities of machine learning and AI in solving real-world problems."
    },
    {
      title: "Web Development",
      icon: "code",
      description: "Creating responsive and user-friendly web applications with modern technologies."
    },
    {
      title: "Data Structures",
      icon: "database",
      description: "Studying efficient ways to organize and manipulate data for optimal performance."
    },
    {
      title: "Mobile App Development",
      icon: "mobile",
      description: "Building cross-platform mobile applications that provide value to users."
    }
  ];

  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          My Interests
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="flex bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-on-scroll"
            >
              <div className="mr-4">
                {interest.icon === "brain" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {interest.icon === "code" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
                {interest.icon === "database" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )}
                {interest.icon === "mobile" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {interest.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

