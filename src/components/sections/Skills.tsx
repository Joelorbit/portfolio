import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: "python" },
        { name: "C++", icon: "cpp" },
        { name: "Java", icon: "java" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML/CSS", icon: "html" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Python Libraries", icon: "python-lib" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: "mysql" },
        { name: "SQL", icon: "sql" }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", icon: "git" },
        { name: "Responsive Design", icon: "responsive" },
        { name: "Canva", icon: "canva" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full"
                  >
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12 text-blue-600 dark:text-blue-400 fill-current">
                <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
              </svg>
              <span className="mt-2 text-gray-700 dark:text-gray-300">Python</span>
            </div>
            
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12 text-blue-700 dark:text-blue-500 fill-current">
                <path d="M435.2 403.6L246.6 41.9C242.8 35.4 235.5 32 228.1 32s-14.7 3.4-18.5 9.9L21 403.6c-3.8 6.5-3.8 14.4-.1 20.9s10.7 10.6 18.5 10.6h377.3c7.8 0 14.8-4.1 18.5-10.6s3.7-14.4-.1-20.9zM228.1 128l110.2 192H117.9L228.1 128z"/>
              </svg>
              <span className="mt-2 text-gray-700 dark:text-gray-300">C++</span>
            </div>
            
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-12 h-12 text-red-600 dark:text-red-400 fill-current">
                <path d="M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.2 12.2 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.3 17.3 0 0 0-8.2 6.3 70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1-21.1-12.8z"/>
              </svg>
              <span className="mt-2 text-gray-700 dark:text-gray-300">Java</span>
            </div>
            
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-12 h-12 text-blue-500 dark:text-blue-300 fill-current">
                <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0s224 35.8 224 80zm-54.8 134.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432v-85.9z"/>
              </svg>
              <span className="mt-2 text-gray-700 dark:text-gray-300">Database</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

