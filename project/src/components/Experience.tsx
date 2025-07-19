import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <Building className="text-blue-600 mr-3" size={24} />
                <div>
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Data Science Intern
                  </h3>
                  <p className={`text-lg ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    AppRely Technologies
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end space-y-2">
                <div className="flex items-center">
                  <Calendar className={`mr-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} size={16} />
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Current Role
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className={`mr-2 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} size={16} />
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    On-site
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Working on real-world AI and computer vision projects. Gained hands-on experience in annotation workflows, 
                image processing, and object detection using advanced tools and technologies.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-600' : 'bg-white'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Responsibilities
                  </h4>
                  <ul className={`text-sm space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>• Work on real-world AI and computer vision projects</li>
                    <li>• Annotation workflows and image processing</li>
                    <li>• Object detection using APT (Automatic Posture Tracking)</li>
                    <li>• Dataset preparation using Roboflow</li>
                    <li>• OpenCV and Python-based CV pipelines</li>
                    <li>• Structured annotation and preprocessing for ML models</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-600' : 'bg-white'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'OpenCV', 'APT', 'Roboflow', 'Computer Vision', 'ML Annotation'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;