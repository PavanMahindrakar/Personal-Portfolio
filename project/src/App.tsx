import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Update document title
  React.useEffect(() => {
    document.title = 'Pavan Deepak Mahindrakar - Data Scientist & ML Enthusiast';
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="pt-20">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Education darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Experience darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;