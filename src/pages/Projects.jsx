import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = ({ darkMode, setDarkMode }) => {
  const projects = [
    { 
      title: 'Movie Anima Website', 
      category: 'WEB DESIGN',
      tech: ['HTML', 'CSS', 'No Response'],
      image: '/public/images/movie_prj.jpg',
      live: 'https://thoenthonny.github.io/MoviesanimaKh/index.html',
      source: 'https://github.com/ThoenThonny/MoviesanimaKh'
    },
    { 
      title: 'Coffee Shop Website', 
      category: 'WEB DESIGN',
      tech: ['HTML', 'CSS', 'bootstrap', 'JS'],
      image: '/public/images/cf_prj.jpg',
      live: 'https://thoenthonny.github.io/E-coffee/',
      source: 'https://github.com/ThoenThonny/E-coffee'
    },
    { 
      title: 'Laravel Api Project', 
      category: 'Job Portal Website',
      tech: ['React.js', 'Laravel10', 'tailwind CSS', 'Mysql', 'No hosting'],
      image: '/public/images/laravel_prj.jpg',
      live: '#',
      source: 'https://github.com/ThoenThonny/Project-React-Laravel/tree/backend'
    },
    
  ];

  const accentColor = darkMode ? 'text-purple-400' : 'text-amber-600';
  const borderColor = darkMode ? 'border-purple-400/30' : 'border-amber-600/30';
  const btnBorder = darkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-amber-600 text-amber-600 hover:bg-amber-600/10';

  return (
    <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} min-h-screen transition-colors duration-500`}>
      {/* Navigation for standalone page */}
      <nav className={`${darkMode ? 'bg-[#1e293b]/80' : 'bg-white/80'} backdrop-blur-md border-b ${borderColor} transition-colors duration-500`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold">
              <span className={accentColor}>×</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Sarita</span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link to="/" className={`text-sm ${accentColor} hover:underline`}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-12 px-6 pb-20">
        <div className="container mx-auto">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={accentColor}>#</span>all projects
          </h1>
          <p className="text-gray-400 mb-12">Complete portfolio of my work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`border ${borderColor} ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} transition-all group hover:shadow-xl duration-500`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="flex gap-3 pt-2">
                    <a href={project.source} target="_blank" rel="noopener noreferrer"
                      className={`border ${btnBorder} px-4 py-2 text-sm transition-all`}
                    >
                      Source <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className={`border ${btnBorder} px-4 py-2 text-sm transition-all`}
                    >
                      Live <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;