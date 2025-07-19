import React from 'react';
import { Github, ExternalLink, Brain, QrCode, BarChart3 } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [expandedProjects, setExpandedProjects] = React.useState<number[]>([]);

  const toggleProjectSkills = (projectIndex: number) => {
    setExpandedProjects(prev => 
      prev.includes(projectIndex) 
        ? prev.filter(index => index !== projectIndex)
        : [...prev, projectIndex]
    );
  };

  const projects = [
    {
      title: 'AI-Powered Demand Forecasting System',
      description: 'Built an intelligent forecasting system using Python, Pandas, and Scikit-learn to predict product demand for inventory optimization, helping businesses reduce waste and improve efficiency.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <Brain className="text-purple-600" size={24} />,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/PavanMahindrakar',
      demo: '#',
      color: 'purple'
    },
    {
      title: 'QR-Based Attendance System',
      description: 'Developed a comprehensive web-based attendance management system using the MERN stack with QR code integration, real-time notifications via Twilio, and email alerts through Nodemailer.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <QrCode className="text-green-600" size={24} />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Twilio', 'Nodemailer'],
      github: 'https://github.com/PavanMahindrakar',
      demo: '#',
      color: 'green'
    },
    {
      title: 'Netflix Dashboard (Power BI)',
      description: 'Created an interactive data visualization dashboard showcasing Netflix content performance using advanced filters, slicers, and trend analysis to provide actionable insights for content strategy.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      icon: <BarChart3 className="text-orange-600" size={24} />,
      technologies: ['Power BI', 'DAX', 'Data Modeling', 'Excel', 'SQL'],
      github: 'https://github.com/PavanMahindrakar',
      demo: '#',
      color: 'orange'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects.includes(index);
            const visibleTechs = isExpanded ? project.technologies : project.technologies.slice(0, 3);
            const remainingCount = project.technologies.length - 3;

            return (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${
                      project.color === 'purple' ? 'bg-purple-100' :
                      project.color === 'green' ? 'bg-green-100' :
                      'bg-orange-100'
                    } ${darkMode ? 'bg-opacity-20' : ''}`}>
                      {project.icon}
                    </div>
                    <h3 className={`text-xl font-semibold ml-3 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-sm mb-6 leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {visibleTechs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          darkMode 
                            ? project.color === 'purple' ? 'bg-purple-600 text-purple-100' :
                              project.color === 'green' ? 'bg-green-600 text-green-100' :
                              'bg-orange-600 text-orange-100'
                            : project.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                              project.color === 'green' ? 'bg-green-100 text-green-800' :
                              'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {!isExpanded && remainingCount > 0 && (
                      <button
                        onClick={() => toggleProjectSkills(index)}
                        className={`px-3 py-1 text-xs rounded-full font-medium cursor-pointer hover:scale-105 transition-transform ${
                          darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        +{remainingCount} more
                      </button>
                    )}
                    {isExpanded && remainingCount > 0 && (
                      <button
                        onClick={() => toggleProjectSkills(index)}
                        className={`px-3 py-1 text-xs rounded-full font-medium cursor-pointer hover:scale-105 transition-transform ${
                          darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        Show less
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;