import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Certificates = () => {
  const { theme } = useContext(ThemeContext);
  
  const certificates = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive certification covering HTML, CSS, responsive design principles, and accessibility standards."
    },
    {
      title: "Web Development",
      issuer: "Udacity",
      date: "2023",
      description: "Professional web development course covering frontend and backend technologies, deployment, and best practices."
    },
    {
      title: "Design Principles",
      issuer: "Coursera",
      date: "2022",
      description: "Course on UI/UX design principles, user research, wireframing, and prototyping using industry-standard tools."
    },
    {
      title: "Canva Design",
      issuer: "Coursera",
      date: "2022",
      description: "Certification in digital design using Canva, covering layouts, typography, color theory, and visual communication."
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          Certificates & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-on-scroll"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

