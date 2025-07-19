import React from "react";
import { User, Coffee } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { number: "2+", label: "Years Learning" },
    { number: "10+", label: "Projects Done" },
    { number: "5+", label: "Technologies" },
    { number: "1", label: "Internship" },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Get to know more about my journey and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm a passionate and curious tech enthusiast currently pursuing
                my MCA at MIT Vishwaprayag University. With a growing foundation
                in data structures, full-stack development, AI/ML technologies,
                and data analytics tools, I love transforming ideas into
                impactful solutions.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                My journey in technology started with a curiosity about how data
                can tell stories and drive decisions. I specialize in Python
                development, machine learning, and creating interactive
                dashboards that make complex data accessible and actionable.
              </p>

              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Outside of work, I enjoy attending tech conferences, exploring
                open-source projects, and building side projects that solve
                real-world problems. I believe in continuous learning and
                staying updated with the latest technological advancements.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  }`}
                >
                  <div className={`text-3xl font-bold text-blue-600 mb-2`}>
                    {stat.number}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Facts */}
            <div
              className={`p-8 rounded-2xl shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div className="flex items-center mb-6">
                <User className="text-blue-600 mr-4" size={28} />
                <h3
                  className={`text-2xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Quick Facts
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Based in India
                  </span>
                </div>
                <div className="flex items-center">
                  <Coffee className="text-blue-600 mr-3" size={20} />
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Fueled by curiosity and coffee
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Available for opportunities
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full mr-3"></div>
                  <span
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Open to collaborations
                  </span>
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
