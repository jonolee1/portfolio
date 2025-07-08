import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      company: "S Ventures",
      role: "Venture Capital Intern",
      period: "May 2024 - Sep 2024",
      location: "Seoul, South Korea",
      highlights: [
        "Conducted due diligence on advanced technology sectors including semiconductors and next-generation batteries",
        "Participated in multiple funding rounds including HBM semiconductor companies supplying SK Hynix's Absolics",
        "Evaluated LLM localization potential in Korea, reviewing feasibility, market potential, and regulatory environment",
        "Sourced and contacted 10+ seed-stage companies focused on AI and deep tech for potential investment opportunities"
      ]
    },
    {
      company: "Instacart",
      role: "Strategy & FP&A Analyst",
      period: "Feb 2024 - Mar 2024",
      location: "San Francisco, CA",
      highlights: [
        "Analyzed 10+ competitors post-IPO to provide insights through FP&A trend analysis on workforce, R&D, and business unit metrics",
        "Collaborated with C-Suite to improve financial strategy, supporting Instacart's financial planning with 10,000+ contacts"
      ]
    },
    {
      company: "4D Molecular Therapeutics",
      role: "Intern & Bioinformatics Analyst",
      period: "May 2023 - Aug 2023",
      location: "Emeryville, CA",
      highlights: [
        "Ranked peptide binding rates using viral capsid design and cloning techniques for gene therapy vector delivery",
        "Analyzed statistical data from next-generation sequencing experiments to support further analysis and graph generation"
      ]
    },
    {
      company: "Hevron Group",
      role: "Private Equity Intern",
      period: "Oct 2022 - Jan 2023",
      location: "Toronto, Canada",
      highlights: [
        "Reviewed financial statements and CIMs of potential acquisition targets, performed competitor analysis",
        "Analyzed customer positioning, business models, future growth potential, and M&A valuations",
        "Researched hardware, cloud services, and product distribution sectors, contacted 100+ Series A/B startups"
      ]
    }
  ];

  const projects = [
    {
      title: "Scheme Interpreter",
      description: "Built a functional programming language interpreter implementing recursive and meta-programming concepts",
      tech: ["Python", "Functional Programming", "Recursion"],
      category: "Computer Science"
    },
    {
      title: "2D Game Engine (BYOW)",
      description: "Developed a tile-based game engine with world generation algorithms and gameplay implementation",
      tech: ["Java", "Game Development", "Algorithms"],
      category: "Computer Science",
      demo: "https://jonolee1.github.io/BYOW-Webport/"
    },
    {
      title: "Housing Price Prediction",
      description: "Built multiple regression models using California housing data with gradient descent and regularization",
      tech: ["Python", "Machine Learning", "Statistical Modeling"],
      category: "Data Science"
    },
    {
      title: "Spam Classification System",
      description: "Developed email spam filtering system using logistic regression and natural language processing",
      tech: ["Python", "NLP", "Classification"],
      category: "Data Science"
    },
    {
      title: "NGrams Language Model",
      description: "Constructed n-gram language models using large-scale text data with hash maps and trie structures",
      tech: ["Java", "Data Structures", "NLP"],
      category: "Computer Science"
    },
    {
      title: "San Francisco Restaurant Safety Analysis",
      description: "Analyzed restaurant inspection data using pandas for data cleaning and exploratory analysis",
      tech: ["Python", "Pandas", "Data Analysis"],
      category: "Data Science"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "SQL", "JavaScript"],
    "Data Science": ["Pandas", "Machine Learning", "Statistical Modeling", "Data Visualization"],
    "Tools & Technologies": ["Git", "Microsoft Office Suite", "Capital IQ"],
    "Languages": ["English (Native)", "Korean (Native)", "Chinese (Conversational)"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Jonathan Lee</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['about', 'experience', 'projects', 'education', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 capitalize text-gray-700 hover:text-blue-600"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Jonathan Lee
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Economics & Data Science Student at UC Berkeley
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Passionate about the intersection of finance and technology. Experienced in venture capital, 
              data analysis, and software development with a strong foundation in machine learning and 
              statistical modeling.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:jonolee1@berkeley.edu"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a
                href="https://github.com/jonolee1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="animate-bounce text-blue-600 hover:text-blue-700"
              >
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-500 flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    project.category === 'Data Science' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.demo && (
                  <div className="mb-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">University of California, Berkeley</h3>
                  <p className="text-lg text-blue-600 font-medium">Bachelor of Arts in Economics & Data Science</p>
                  <p className="text-gray-600">Double Major • GPA: 3.5/4.0</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Expected May 2026</p>
                  <p className="text-gray-500">SAT: 1580/1600</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Computer Science</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• CS61A: Structure and Interpretation of Computer Programs</li>
                      <li>• CS61B: Data Structures</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Data Science</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• DATA 100: Principles and Techniques of Data Science</li>
                      <li>• Statistical Modeling & Machine Learning</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Awards & Achievements</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Morgan Stanley x Haas Business School Case Competition Finalist (2023)</li>
                  <li>• iGEM Competition Gold Medal & iGEMer's Prize</li>
                  <li>• UK Mathematics Trust Senior Mathematical Challenge Gold (2019, 2020)</li>
                  <li>• UK Physics Olympiad Silver Medal (2020)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h5 className="font-medium text-gray-800 mb-2">{category}</h5>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities, especially in data science and computer science. 
              Whether you want to discuss a potential collaboration or just say hello, I'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:jonolee1@berkeley.edu"
                className="flex items-center justify-center gap-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Mail className="text-blue-600" size={24} />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">jonolee1@berkeley.edu</p>
                </div>
              </a>
              
              <a
                href="tel:+15102297933"
                className="flex items-center justify-center gap-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Phone className="text-blue-600" size={24} />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (510) 229-7933</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Jonathan Lee. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/jonolee1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:jonolee1@berkeley.edu"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;