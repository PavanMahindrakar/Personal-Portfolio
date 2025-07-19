import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'MIT Vishwaprayag University',
      period: '2024 - 2026',
      status: 'Currently Pursuing',
      description: 'Specializing in advanced computer applications, data science, and software development.',
      icon: <GraduationCap className="text-blue-600" size={24} />,
      color: 'blue'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'HNCC, Solapur',
      period: '2021 - 2024',
      status: 'Completed',
      description: 'Foundation in computer science, programming languages, and software development principles.',
      icon: <Award className="text-green-600" size={24} />,
      color: 'green'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent high performance in core subjects',
      icon: <Award className="text-yellow-600" size={20} />
    },
    {
      title: 'Technical Skills',
      description: 'Developed expertise in modern technologies',
      icon: <GraduationCap className="text-blue-600" size={20} />
    }
  ];

  return (
    <section id="education" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My academic journey and continuous learning path in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-50'
                }`}
              >
                {/* Timeline connector */}
                {index < educationData.length - 1 && (
                  <div className={`absolute left-12 top-full w-0.5 h-8 ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}></div>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-xl shadow-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                    {edu.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.degree}
                        </h3>
                        <p className={`text-lg font-semibold ${
                          edu.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                        }`}>
                          {edu.institution}
                        </p>
                      </div>
                      
                      <div className="flex flex-col md:items-end mt-4 md:mt-0">
                        <div className="flex items-center mb-2">
                          <Calendar className={`mr-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} size={16} />
                          <span className={`text-sm font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {edu.period}
                          </span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Currently Pursuing' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        } ${darkMode ? 'bg-opacity-20' : ''}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    <p className={`text-lg leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className={`p-8 rounded-2xl shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Academic Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${
                      darkMode ? 'bg-gray-600' : 'bg-gray-100'
                    }`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;