import React from "react";
import { ArrowDown, Download, Mail } from "lucide-react";

const texts = [
  "Data Scientist",
  "Python Developer",
  "ML Enthusiast",
  "Power BI Expert",
];

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentText, setCurrentText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex];

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1));

          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p
                className={`text-lg font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hello, I'm
              </p>
              <h1
                className={`text-5xl lg:text-6xl font-bold leading-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="block">Pavan Deepak</span>
                <span className="text-blue-600">Mahindrakar</span>
              </h1>
              <div className="h-8">
                <p
                  className={`text-xl lg:text-2xl ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  I'm a{" "}
                  <span className="text-blue-600 font-semibold">
                    {currentText}
                  </span>
                  <span className="animate-pulse text-blue-600">|</span>
                </p>
              </div>
            </div>

            <p
              className={`text-lg leading-relaxed max-w-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Turning data into insights
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} className="mr-2" />
                Get In Touch
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Pavan_Deepak_Mahindrakar_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className={`flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 ${
                  darkMode ? "hover:text-white" : ""
                }`}
              >
                <Download size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="https://i.postimg.cc/bvHGkS3z/IMG-20241023-145419756-HDR.jpg"
                  alt="Pavan Deepak Mahindrakar"
                  className="w-full h-full object-cover "
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
