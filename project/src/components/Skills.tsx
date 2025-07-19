import React from 'react';
import { 
  Code, 
  Database, 
  BarChart3, 
  Globe, 
  Brain
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={32} />,
      skills: [
        { name: 'Python', level: 90, color: 'bg-blue-500' },
        { name: 'C++', level: 85, color: 'bg-green-500' },
        { name: 'SQL', level: 75, color: 'bg-purple-500' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-green-600" size={32} />,
      skills: [
        { name: 'React', level: 85, color: 'bg-cyan-500' },
        { name: 'Flask', level: 80, color: 'bg-red-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' }
      ]
    },
    {
      title: 'Data Science & ML',
      icon: <Brain className="text-purple-600" size={32} />,
      skills: [
        { name: 'Pandas', level: 85, color: 'bg-indigo-500' },
        { name: 'NumPy', level: 80, color: 'bg-blue-500' },
        { name: 'Scikit-learn', level: 75, color: 'bg-green-500' },
        { name: 'Matplotlib', level: 80, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Tools & Analytics',
      icon: <BarChart3 className="text-orange-600" size={32} />,
      skills: [
        { name: 'Power BI', level: 90, color: 'bg-yellow-500' },
        { name: 'Git/GitHub', level: 85, color: 'bg-gray-500' },
        { name: 'MySQL', level: 80, color: 'bg-blue-500' },
        { name: 'Seaborn', level: 75, color: 'bg-teal-500' }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-xl ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-semibold ml-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-semibold ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-3 ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;