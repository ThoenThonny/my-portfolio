import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Send, ExternalLink, Sun, Moon, ChevronDown, ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import cf from '../../public/images/cf_prj.jpg';
import laravel from '../../public/images/laravel_prj.jpg';
import movie from '../../public/images/movie_prj.jpg';


const Home = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const canvasRef = useRef(null);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quotes = [
  { 
    text: "Teaching web development is not just about writing code, it's about teaching how to think and solve problems.", 
    author: "Web Developer Instructor" 
  },
  { 
    text: "Good code is not only how it looks on the screen, but how it works behind the scenes.", 
    author: "Web Developer Instructor" 
  },
  { 
    text: "Simplicity in code makes learning, maintaining, and scaling easier.", 
    author: "Web Developer Instructor" 
  }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Particles.js implementation - FIXED FOR MOBILE
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let isMobile = window.innerWidth < 768;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Adjust particle count for mobile
      const particleCount = isMobile ? 30 : 60;
      const maxDistance = isMobile ? 100 : 150;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.vx = (Math.random() - 0.5) * (isMobile ? 0.8 : 1.5);
          this.vy = (Math.random() - 0.5) * (isMobile ? 0.8 : 1.5);
          this.radius = Math.random() * (isMobile ? 1.5 : 2.5) + 0.5;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          // Bounce off walls
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
          ctx.fillStyle = darkMode ? 'rgba(168, 85, 247, 0.4)' : 'rgba(245, 158, 11, 0.4)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacity = 0.2 - (distance / maxDistance) * 0.15;
              ctx.strokeStyle = darkMode 
                ? `rgba(168, 85, 247, ${opacity})`
                : `rgba(245, 158, 11, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        connectParticles();
        animationFrameId = requestAnimationFrame(animate);
      }

      animate();
    };

    initCanvas();

    const handleResize = () => {
      isMobile = window.innerWidth < 768;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      initCanvas();
    };

    const handleMouseMove = (e) => {
      if (isMobile) return; // Disable mouse interaction on mobile for performance
      
      const mouseParticle = {
        x: e.clientX,
        y: e.clientY
      };

      particles.forEach(particle => {
        const dx = mouseParticle.x - particle.x;
        const dy = mouseParticle.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const angle = Math.atan2(dy, dx);
          const force = (120 - distance) / 120;
          particle.vx -= Math.cos(angle) * force * 0.5;
          particle.vy -= Math.sin(angle) * force * 0.5;
        }
      });
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [darkMode]);

  const skills = {
    languages: ['JavaScript', 'PHP', 'C' , 'C++'],
    databases: ['PostgreSQL', 'MySQL'],
    frameworks: ['React.js', 'Vue.js', 'Express', 'Laravel'],
    other: ['HTML', 'CSS', 'JS6','Bootstrap', 'Tailwind CSS', 'GitHub']
  };

  const projects = [
    { 
      title: 'Movie Anima Website', 
      category: 'WEB DESIGN',
      tech: ['HTML', 'CSS', 'No Response'],
      image: `${movie}`,
      live: 'https://thoenthonny.github.io/MoviesanimaKh/index.html',
      source: 'https://github.com/ThoenThonny/MoviesanimaKh'
    },
    { 
      title: 'Coffee Shop Website', 
      category: 'WEB DESIGN',
      tech: ['HTML', 'CSS', 'bootstrap', 'JS'],
      image: `${cf}`,
      live: 'https://thoenthonny.github.io/E-coffee/',
      source: 'https://github.com/ThoenThonny/E-coffee'
    },
    { 
      title: 'Laravel Api Project', 
      category: 'Job Portal Website',
      tech: ['React.js', 'Laravel10', 'tailwind CSS', 'Mysql', 'No hosting'],
      image: `${laravel}`,
      live: '#',
      source: 'https://github.com/ThoenThonny/Project-React-Laravel/tree/backend'
    },
    
  ];

  const experiences = [
    {
      title: "Basic Code Instructor",
      company: "Etec Center",
      period: "2024 - 2025",
      description: "Teaching programming fundamentals to beginners, focusing on problem-solving and logical thinking using languages like C and C++.",
      skills: ["C","C++"]
    },
    {
      title: "Web Developement Instructor",
      company: "Etec Center",
      period: "2025 - Peresent",
      description: "Teaching web development fundamentals to aspiring developers, covering HTML, CSS, JavaScript,PHP and modern frameworks.",
      skills: ["JavaScript", "HTML5", "CSS3", "PHP", "Laravel", "Vue.js", "React.js" , "MySQL", "Git"]
    }
  ];

  const education = [
    {
      degree: "High School",
      institution: "Preah Norodom Sihamoni High School",
      period: "2021-2023",
      description: "Focus on science and society with strong academic performance"
    },
    {
      degree: "Royal University of Phnom Penh",
      institution: "Bachelor's in Computer Science",
      period: "2023-Present",
      description: "Pursuing a degree in Computer Science with a focus on software development and web technologies"
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const accentColor = darkMode ? 'text-purple-400' : 'text-amber-600';
  const borderColor = darkMode ? 'border-purple-400/30' : 'border-amber-600/30';
  const btnBorder = darkMode ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10' : 'border-amber-600 text-amber-600 hover:bg-amber-600/10';
  const sectionBg = darkMode ? 'bg-[#0f172a]' : 'bg-white';
  const bgColor = darkMode ? 'bg-[#1e293b]' : 'bg-gray-50';

  return (
    <div className={`${bgColor} min-h-screen transition-colors duration-500 overflow-x-hidden`}>
      
      {/* Particles canvas - FIXED POSITIONING */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navigation - FIXED FOR MOBILE */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-[#1e293b]/90' : 'bg-white/90'} backdrop-blur-md border-b ${borderColor} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')} 
              className="flex items-center gap-2 text-lg font-bold cursor-pointer"
            >
              <span className={accentColor}>×</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>Thonny</span>
            </button>
            
            <div className="hidden md:flex items-center gap-6">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1 ${
                    activeSection === item ? accentColor : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  #{item}
                </button>
              ))}
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode ? 'bg-purple-400/10 text-purple-400' : 'bg-amber-600/10 text-amber-600'} transition-all`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${darkMode ? 'bg-purple-400/10 text-purple-400' : 'bg-amber-600/10 text-amber-600'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${accentColor}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${borderColor} ${darkMode ? 'bg-[#1e293b]' : 'bg-white'} transition-colors duration-500`}>
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-2">
              {['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-3 py-2 ${
                    activeSection === item ? accentColor + ' bg-purple-400/10' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  #{item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Social Sidebar - HIDDEN ON MOBILE */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        <a href="https://github.com/ThoenThonny" target='_blank' rel="noopener noreferrer" className={`p-2 text-gray-500 transition-colors ${accentColor.replace('text-', 'hover:text-')} hover:scale-110`}>
          <Github className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/thoeun-thonny-2a1862254/" target='_blank' rel="noopener noreferrer" className={`p-2 text-gray-500 transition-colors ${accentColor.replace('text-', 'hover:text-')} hover:scale-110`}>
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="https://t.me/nyfinker" target='_blank' rel="noopener noreferrer" className={`p-2 text-gray-500 transition-colors ${accentColor.replace('text-', 'hover:text-')} hover:scale-110`}>
          <Send className="w-4 h-4" />
        </a>
      </div>

      {/* Hero Section - FIXED FOR MOBILE */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hello Everyone I'm <span className={accentColor}>Web Developer</span>
                <br />
                and <span className={accentColor}>Instructor</span> 
              </h1>
              
              <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">
                I help aspiring developers learn the skills they need to build modern, responsive websites and applications.
              </p>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`border ${btnBorder} px-6 py-3 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg`}
              >
                Contact ME <ArrowRight className="inline w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative border - SIMPLIFIED FOR MOBILE */}
                <div className={`absolute -inset-2 sm:-inset-3 border ${darkMode ? 'border-purple-400' : 'border-amber-600'} pointer-events-none transition-colors duration-500 rounded-lg`}
                     style={{
                       clipPath: 'polygon(0 20%, 20% 20%, 20% 0, 80% 0, 80% 20%, 100% 20%, 100% 100%, 0 100%)'
                     }}>
                </div>
                
                {/* Image */}
                <img
                  src="/images/me.jpg"
                  alt="Thonny"
                  className="relative w-full h-auto rounded-lg shadow-2xl object-cover"
                  style={{ maxHeight: '550px' }}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop";
                  }}
                />
                
                <div className={`mt-4 border ${borderColor} px-4 py-2 inline-flex items-center gap-2 transition-colors duration-500 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                  <span className="text-sm text-gray-400">Open for new opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className={`w-6 h-6 ${accentColor} transition-colors duration-500`} />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto w-full">
          <div className={`border ${borderColor} p-6 sm:p-8 relative transition-all duration-500 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100/30'}`}>
            <div className={`absolute -top-3 left-6 ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} px-2`}>
              <span className={`${accentColor} text-2xl`}>"</span>
            </div>
            <div className={`absolute -bottom-3 right-6 ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} px-2`}>
              <span className={`${accentColor} text-2xl`}>"</span>
            </div>
            
            <p className="text-lg sm:text-xl text-center mb-3 sm:mb-4 px-4">
              {quotes[currentQuote].text}
            </p>
            <p className={`text-right ${accentColor} text-sm sm:text-base`}>
              - {quotes[currentQuote].author}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className={accentColor}>#</span>about
            </h2>
            <Link to="/about" className={`${accentColor} hover:underline flex items-center gap-2`}>
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <p className="text-gray-400 text-base sm:text-lg">
                I'm a passionate web developer with expertise in creating modern, responsive websites. 
                I combine technical skills with creative design to build user-friendly digital experiences.
              </p>
              <p className="text-gray-400 text-base sm:text-lg">
                My journey in web development started with a curiosity for how websites work, and it has 
                grown into a career focused on building solutions that are both beautiful and functional.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative max-w-sm mx-auto">
                <img
                  src="/images/ny.jpg"
                  alt="About Thonny"
                  className="w-full h-auto rounded-lg shadow-xl"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`relative py-16 px-4 sm:px-6 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className={accentColor}>#</span>education
            </h2>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`border ${borderColor} p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${darkMode ? 'bg-gray-800/30' : 'bg-white'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-400/10' : 'bg-amber-600/10'}`}>
                    <GraduationCap className={`w-5 h-5 ${accentColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`${accentColor} mb-2`}>{edu.institution}</p>
                    <span className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-sm rounded-full`}>
                      {edu.period}
                    </span>
                    <p className="text-gray-400 mt-3">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className={accentColor}>#</span>experience
            </h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`border-l-4 ${darkMode ? 'border-purple-400' : 'border-amber-600'} pl-6 py-4 relative`}
              >
                <div className={`absolute -left-2 top-4 w-3 h-3 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>
                    <p className={`text-base sm:text-lg ${accentColor}`}>{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 ${darkMode ? 'bg-purple-400/10 text-purple-400' : 'bg-amber-600/10 text-amber-600'} rounded-full mt-2 sm:mt-0 text-sm`}>
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'} rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`relative py-16 px-4 sm:px-6 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className={accentColor}>#</span>projects
            </h2>
            <Link to="/projects" className={`${accentColor} hover:underline flex items-center gap-2`}>
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`border ${borderColor} rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800/30' : 'bg-white'} transition-all duration-300 hover:shadow-xl`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.category}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className={`border ${btnBorder} px-4 py-2 text-sm rounded-lg transition-all hover:scale-105`}>
                      Live <ExternalLink className="inline w-3 h-3 ml-1" />
                    </a>
                    <a href={`${project.source || '#'}`} target="_blank" rel="noopener noreferrer"
                      
                      className={`border ${borderColor} px-4 py-2 text-sm rounded-lg transition-all hover:scale-105 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                      Source Code <Github className="inline w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className={accentColor}>#</span>skills
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className={`border ${borderColor} p-4 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white'} hover:shadow-lg transition-all`}>
                  <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Languages</h3>
                  <div className="space-y-2">
                    {skills.languages.map((skill, i) => (
                      <div key={i} className="text-gray-400 text-sm flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`border ${borderColor} p-4 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white'} hover:shadow-lg transition-all`}>
                  <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Other</h3>
                  <div className="space-y-2">
                    {skills.other.slice(0, 6).map((skill, i) => (
                      <div key={i} className="text-gray-400 text-sm flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`border ${borderColor} p-4 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white'} hover:shadow-lg transition-all`}>
                  <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Databases</h3>
                  <div className="space-y-2">
                    {skills.databases.map((skill, i) => (
                      <div key={i} className="text-gray-400 text-sm flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`border ${borderColor} p-4 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white'} hover:shadow-lg transition-all`}>
                  <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Frameworks</h3>
                  <div className="space-y-2">
                    {skills.frameworks.map((skill, i) => (
                      <div key={i} className="text-gray-400 text-sm flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`}></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className={`border ${borderColor} p-6 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white'} h-full`}>
                <h3 className={`text-lg font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Technical Expertise
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Frontend Development</span>
                      <span className={accentColor}>80%</span>
                    </div>
                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div className={`h-full rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`} style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Backend Development</span>
                      <span className={accentColor}>75%</span>
                    </div>
                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div className={`h-full rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`} style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Responsive Design</span>
                      <span className={accentColor}>80%</span>
                    </div>
                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div className={`h-full rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`} style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Database</span>
                      <span className={accentColor}>65%</span>
                    </div>
                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div className={`h-full rounded-full ${darkMode ? 'bg-purple-400' : 'bg-amber-600'}`} style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`relative py-16 px-4 sm:px-6 ${sectionBg}`}>
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className={accentColor}>#</span>contact
            </h2>
            <Link to="/contact" className={`${accentColor} hover:underline flex items-center gap-2`}>
              Contact form <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-gray-400">
                I'm interested in freelance opportunities and collaborations. Feel free to reach out for any project inquiries or just to say hello!
              </p>
              <div className={`border ${borderColor} p-6 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-gray-100/30'}`}>
                <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Contact</h3>
                <div className="space-y-3">
                  <a href="https://t.me/nyfinker" target='_blank' rel="noopener noreferrer" className={`flex items-center gap-3 text-gray-400 hover:${accentColor.replace('text-', '')} transition-colors`}>
                    <Send className="w-4 h-4" />
                    @nyfinker
                  </a>
                  <a href="https://github.com/ThoenThonny" target='_blank' rel="noopener noreferrer" className={`flex items-center gap-3 text-gray-400 hover:${accentColor.replace('text-', '')} transition-colors`}>
                    <Github className="w-4 h-4" />
                    ThoenThonny
                  </a>
                  <a href="https://www.linkedin.com/in/thoeun-thonny-2a1862254/" target='_blank' rel="noopener noreferrer" className={`flex items-center gap-3 text-gray-400 hover:${accentColor.replace('text-', '')} transition-colors`}>
                    <Linkedin className="w-4 h-4" />
                    Thoeun Thonny
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className={`border ${borderColor} p-6 rounded-xl ${darkMode ? 'bg-gray-800/30' : 'bg-white'}`}>
                <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
                <Link to="/contact" className={`block w-full text-center border ${btnBorder} py-3 rounded-lg transition-all hover:shadow-lg`}>
                  Go to Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'border-purple-500/20' : 'border-amber-600/20'} py-6 px-4 sm:px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={accentColor}>×</span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold`}>Thonny</span>
              <span className="text-gray-400 text-sm ml-3">Web Developer & Instructor</span>
            </div>
            <div className="text-gray-400 text-sm">
              © Copyright {new Date().getFullYear()}. Made with ❤️ by Thonny
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* Prevent horizontal overflow */
        * {
          box-sizing: border-box;
        }

        /* Improve mobile scrolling */
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }

        /* Better image handling */
        img {
          max-width: 100%;
          height: auto;
        }

        /* Fix for mobile viewport */
        @media (max-width: 640px) {
          section {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Ensure particles don't cause overflow */
          canvas {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;