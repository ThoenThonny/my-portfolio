import React from 'react';
import { 
  User, Code, Palette, Camera, 
  Globe, Award, BookOpen, Heart,
  ArrowLeft, ExternalLink, Download,
  Calendar, MapPin, Briefcase, GraduationCap,
  icons
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = ({ darkMode }) => {
  const accentColor = darkMode ? 'text-purple-400' : 'text-amber-600';
  const borderColor = darkMode ? 'border-purple-400/30' : 'border-amber-600/30';
  const btnBorder = darkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-amber-600 text-amber-600 hover:bg-amber-600/10';
  const sectionBg = darkMode ? 'bg-[#0f172a]' : 'bg-white';

  

  const timeline = [
    { year: "2023", title: "Started Bacis Coding", description: " learning c/c++ " },
    { year: "2024", title: "Started Web Frontend", description: "building small websites frontend" },
    { year: "2025", title: "Started Web Backend", description: "Started projects full-stack websites" },
    { year: "Present", title: "Continuous Learning", description: "Exploring new frameworks and technologies" },
  ];

  const interests = [
    { icon: "🏐", title: "Volleyball", description: "Playing competitive volleyball on weekends" },
    { icon: "⚽", title:"Football", description: "Playing and watching football matches" },
    { icon: "🏋️", title: "Fitness", description: "Yoga, running, and staying active" },
    { icon: "🎮", title: "Gaming", description: "Strategy games and indie game development" },
    { icon: "☕", title: "Coffee", description: "Exploring specialty coffee and brewing methods" },
    { icon: "✈️", title: "Trips", description: "Traveling to new places and cultures" },
  ];

  

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} transition-colors duration-500`}>
      {/* Header with Back Button */}
      <header className={`sticky top-0 ${darkMode ? 'bg-[#1e293b]/80' : 'bg-white/80'} backdrop-blur-md border-b ${borderColor} transition-colors duration-500 z-50`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg font-bold">
              <span className={accentColor}>×</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Thonny</span>
            </div>
            
            <Link 
              to="/" 
              className={`flex items-center gap-2 ${btnBorder} border px-4 py-2 rounded-lg transition-all hover:shadow-lg`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative group">
                <img
                  src="../../public/images/thonny.jpg"
                  alt="Sarita"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                {/* Decorative elements */}
                <div className={`absolute -inset-4 border-2 ${darkMode ? 'border-purple-400' : 'border-amber-600'} rounded-2xl -z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
                <div className={`absolute -inset-6 border ${borderColor} rounded-2xl -z-20 transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4`}></div>
              </div>
            </div>

            {/* Right Column - Introduction */}
            <div className="space-y-8">
              <div>
                <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hello, I'm <span className={accentColor}>Thonny</span>
                </h1>
                <p className={`text-2xl mb-6 ${accentColor}`}>
                  Web developer & Instructor
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-lg">
                  I am a web developer and instructor with one year of hands-on experience in designing, developing, and teaching modern web applications. I have worked with core web technologies such as HTML, CSS, JavaScript, PHP, MySQL, and popular frameworks and libraries to build responsive and user-friendly websites. As an instructor, 
                </p>
                <p className="text-gray-400 text-lg">
                  I have guided students through web development fundamentals, practical projects, and best practices, helping them understand both front-end and back-end concepts. My experience combines real-world development skills with a passion for teaching, mentoring, and continuously improving technical knowledge.
                </p>
              </div>

              {/* Personal Info Grid */}
              <div className={`grid grid-cols-2 gap-4 p-6 rounded-xl ${sectionBg}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <MapPin className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className={darkMode ? 'text-white' : 'text-gray-900'}>Phnom Penh, Cambodia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <Briefcase className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Experience</p>
                    <p className={darkMode ? 'text-white' : 'text-gray-900'}>1 Years</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <GraduationCap className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Education</p>
                    <p className={darkMode ? 'text-white' : 'text-gray-900'}> Computer Science</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <User className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className={darkMode ? 'text-white' : 'text-gray-900'}>Available for work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

     

      {/* Timeline Section */}
      <section className={`py-20 px-6 ${sectionBg}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My <span className={accentColor}>Journey</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The path that brought me here, filled with learning and growth.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${darkMode ? 'bg-purple-400/20' : 'bg-amber-600/20'}`}></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline point */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <div className={`inline-block p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-lg transition-shadow`}>
                    <div className={`text-2xl font-bold mb-2 ${accentColor}`}>{item.year}</div>
                    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Beyond <span className={accentColor}>Code</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              When I'm not building websites, here's what keeps me inspired and balanced.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`border ${borderColor} p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-3xl mb-3">{interest.icon}</div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {interest.title}
                </h3>
                <p className="text-sm text-gray-400">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`py-20 px-6 ${sectionBg}`}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className={`inline-flex p-3 rounded-full mb-6 ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
              <Heart className={`w-8 h-8 ${accentColor}`} />
            </div>
            <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My Design Philosophy
            </h2>
            <div className={`border-l-4 ${darkMode ? 'border-purple-400' : 'border-amber-600'} pl-6 py-4 text-left`}>
              <p className="text-xl text-gray-400 italic mb-4">
                "Study For Skill Works For Experience"
              </p>
              <p className={`${accentColor} font-semibold`}>— Thonny, Web Developer & Instructor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's <span className={accentColor}>Connect</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Interested in working together or just want to chat about design and development?
            I'm always open to interesting conversations and new opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className={`border ${btnBorder} px-8 py-3 rounded-lg transition-all hover:shadow-lg flex items-center gap-2`}
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className={`border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-200'} px-8 py-3 rounded-lg transition-all hover:shadow-lg flex items-center gap-2`}
            >
              View My Work
            </Link>
            <Link to="/" className={`border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-200'} px-8 py-3 rounded-lg transition-all hover:shadow-lg flex items-center gap-2`}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-purple-500/20' : 'border-amber-600/20'} py-8 px-6 transition-colors duration-500`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={accentColor}>×</span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold`}>Thonny</span>
              <span className="text-gray-400 text-sm ml-4">Web Developer & Instructor</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;