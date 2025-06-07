import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
              <img
                src="/images/profile.png"
                alt="Eyuel Getachew"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
              Software Engineering Student
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I am a passionate software engineering student with a strong interest in creating innovative solutions to complex problems. My journey in technology began with a curiosity about how things work, which has evolved into a deep passion for software development.
              </p>

              <h4 className="text-xl font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100">Education</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-3"></div>
                  <div>
                    <p className="font-medium">2020/2021 - 2023/2024</p>
                    <p>High School Diploma - Amigonian Secondary School</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-3"></div>
                  <div>
                    <p className="font-medium">2023/2024 - Present</p>
                    <p>Software Engineering - Currently Studying at Adama science and Technology University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

