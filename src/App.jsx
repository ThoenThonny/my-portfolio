import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

import Experience from './pages/Experience';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'} min-h-screen font-mono transition-colors duration-500`}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} setDarkMode={setDarkMode} />} />

          <Route path="/experience" element={<Experience darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="*" element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;