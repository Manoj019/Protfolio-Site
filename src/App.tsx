import React, { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import ContactPage from './ContactPage';
import reactlogo from './assets/react-js-icon.svg'
import htmllogo from './assets/html-icon.svg'
import csslogo from './assets/css-icon.svg'
import javascriptlogo from './assets/javascript-icon.svg'
import nodejslogo from './assets/node-js-icon.svg'
import tailwindlogo from './assets/tailwindcss.svg'
import restapilogo from './assets/rest-api-icon.svg'
import sqllogo from './assets/mysql-icon.svg'
import mongodblogo from './assets/mongodb-icon.svg'
import figmalogo from './assets/figma-icon.svg'
import javalogo from './assets/java-icon.svg'
import springlogo from './assets/spring-boot-icon.svg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - with scroll effect and transition */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">Back & Beyond</h1>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all after:duration-300">About</a>
              <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all after:duration-300">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all after:duration-300">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all after:duration-300">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-indigo-600 after:transition-all after:duration-300">Contact</a>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-300"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with slide effect */}
        <div 
          className={`sm:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
          style={{display: isMenuOpen ? 'block' : 'none'}}
        >
          <div className="pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300">About</a>
            <a href="#experience" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300">Experience</a>
            <a href="#projects" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - with animated entrance */}
      <div className="bg-white pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fadeIn">
              <span className="block">Hi, I'm Manoj Kumar Vunkili</span>
              <span className="block text-indigo-600 animate-slideUp">Full Stack Developer</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-fadeIn opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              I build exceptional digital experiences. Passionate about creating innovative solutions and delivering high-quality software.
            </p>
            <div className="mt-5 max-w-md mx-auto flex justify-center space-x-4 animate-fadeIn opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <a href="https://github.com/Manoj019" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transform hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/manojv018/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:manojvunkili018@gmail.com" className="text-gray-400 hover:text-red-500 transform hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-indigo-600">About Me</h2>
          <div className="mt-6 text-gray-500 transform transition-all duration-500 hover:translate-x-2">
            <p className="text-lg">
              A passionate software developer with expertise in modern web technologies. I enjoy solving complex problems and creating user-friendly applications.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-indigo-600">Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900">Frontend Developer Intern</h3>
              <p className="text-gray-600">Americana • Oct 2024 - Jan 2025</p>
              <ul className="mt-4 text-gray-500 list-disc list-inside">
                <li className="hover:text-indigo-600 transition-colors duration-300">Built micro-frontend components for a live CCTV monitoring system using React.js in an Agile team.</li>
                <li className="hover:text-indigo-600 transition-colors duration-300">Participated in daily stand-up meetings and collaborated on branch-based development workflow.</li>
                <li className="hover:text-indigo-600 transition-colors duration-300">Coordinated with backend and design teams to ensure seamless UI-UX integration for live monitoring.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-indigo-600">Projects</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">BookYoGo - Full-Stack Booking Web App</h3>
              <p>Personal Project | MERN Stack | In Progress</p>
              <p className="mt-2 text-gray-500">
                <ul>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Designing and developing a web platform to book and manage venue grounds for events.</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Developed modular UI sections including venue listings, search, and booking info using Framer Motion, CSS, and JavaScript.</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Currently working on RESTful API integration using Node.js, Express.js, and MongoDB to handle booking data and user management.</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Focused on clean architecture, component reusability, and secure data flow across the stack.</li>
                </ul>
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <a href="https://github.com/Manoj019/BookYouGo" target='_blank' className="text-indigo-600 hover:text-indigo-800 flex items-center group transition-colors duration-300">
                  GitHub Link <ExternalLink className="ml-1 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">Another Project</h3>
              <p className="mt-2 text-gray-500">Coming Soon..</p>
              <div className="mt-4 flex items-center space-x-2">
                <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center">
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section*/}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-indigo-600">Skills</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900">Frontend</h3>
              <div className="mt-4 text-gray-700 space-y-2">
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={htmllogo} alt="HTML Logo" />
                    <span>HTML</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={csslogo} alt="CSS Logo" />
                    <span>CSS</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={javascriptlogo} alt="JavaScript Logo" />
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={tailwindlogo} alt="Tailwind CSS Logo" />
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={figmalogo} alt="Figma Logo" />
                    <span>Figma</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={reactlogo} alt="React Logo" />
                    <span>React.js</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900">Backend</h3>
              <div className="mt-4 text-gray-700 space-y-2">
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={nodejslogo} alt="Node.js Logo" />
                    <span>Node.js</span> 
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={javalogo} alt="Node.js Logo" />
                    <span>Java</span> 
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={springlogo} alt="Node.js Logo" />
                    <span>Spring Boot</span> 
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={restapilogo} alt="REST API Logo" />
                    <span>REST API</span> 
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900">Database</h3>
              <div className="mt-4 text-gray-700 space-y-2">
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={sqllogo} alt="MySQL Logo" />
                    <span>MySQL</span>
                  </li>
                  <li className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors duration-300">
                    <img className="w-5 h-5 transform hover:scale-110 transition-transform duration-300" src={mongodblogo} alt="MongoDB Logo" />
                    <span>MongoDB</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-indigo-600">Certifications</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">Accenture Nordics Software Engineering Virtual Experience</h3>
              <p className="mt-2 text-gray-500">
                <ul>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Gained exposure to agile development practices, software design, security principles, and collaboration across business and developer teams.</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Enhanced skills in software testing, secure programming, and application scalability in a healthcare-focused digital environment.</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Contributed to optimizing the user experience (UX) by analyzing app architecture and proposing redesigns for improved navigation.</li>
                </ul>
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <a href="https://drive.google.com/file/d/14SAOdqSFvnMJ4bIXRQb3hm18nhHyE59w/view?usp=drive_link" target='_blank' className="text-indigo-600 hover:text-indigo-800 flex items-center group transition-colors duration-300">
                  Certification <ExternalLink className="ml-1 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300">Goldman Sachs Software Engineering Virtual Experience</h3>
              <p className="mt-2 text-gray-500">
                <ul>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Completed a hands-on task simulating real-world security incident response</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Identified and cracked leaked password hashes and brute-force/dictionary techniques.</li>
                  <li className="hover:text-indigo-600 transition-colors duration-300">Gained experience in cybersecurity principles, password entropy, and secure hashing mechanisms.</li>
                </ul>
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <a href="https://drive.google.com/file/d/14SAOdqSFvnMJ4bIXRQb3hm18nhHyE59w/view?usp=drive_link" target='_blank' className="text-indigo-600 hover:text-indigo-800 flex items-center group transition-colors duration-300">
                  Certification <ExternalLink className="ml-1 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactPage />

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 hover:text-gray-700 transition-colors duration-300">
            © {new Date().getFullYear()} Manoj Kumar Vunkili. All rights reserved.
          </p>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }   
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}

export default App;