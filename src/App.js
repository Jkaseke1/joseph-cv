import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <main className="container">
        <div className="content-grid">
          <section id="profile"><Profile /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

function Header({ isScrolled }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="header-title">
          <h1>Joseph Kaseke | IT Systems Administrator</h1>
          <a
            className="download-btn"
            href="/Joseph_Kaseke_CV.pdf"
            download="Joseph_Kaseke_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Profile() {
  return (
    <div className="profile-container">
      <h2>Professional Summary</h2>
      <p>
        Experienced IT Systems Administrator with over 5 years in managing enterprise infrastructure, cloud technologies, and full stack development. Proven expertise in digital transformation, data analytics, and automation. Strong communicator and proactive problem-solver dedicated to operational excellence.
      </p>
      <div className="contact-info">
        <a href="mailto:joseph.kaseke19@gmail.com">Email: joseph.kaseke19@gmail.com</a>
        <a href="https://www.linkedin.com/in/joseph-kaseke-45ba48338/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        <a href="https://github.com/Jkaseke1" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        <a href="https://www.hyperiondev.com/portfolio/JK23120012827/" target="_blank" rel="noopener noreferrer">Development Portfolio</a>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>System and Network Administration</li>
            <li>Cloud Infrastructure (AWS, Azure)</li>
            <li>Windows Server, Active Directory</li>
            <li>JavaScript, TypeScript, React.js, Node.js, Express.js</li>
            <li>Python (Automation, Web Scraping)</li>
            <li>Data Analytics, Power BI</li>
            <li>Microsoft Power Platform (Power Apps, Automate)</li>
            <li>API Development, RESTful Services</li>
            <li>Version Control (Git)</li>
            <li>ERP: Sage Evolution Pastel, Odoo ERP</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Collaboration</li>
            <li>Adaptability</li>
            <li>Process Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-item">
        <h3>IT Systems Administrator & Digital Transformation Lead</h3>
        <p>Pulse Pharmaceuticals | 2019 - Present</p>
        <ul>
          <li>Reduced infrastructure downtime by 60% through proactive maintenance and automation.</li>
          <li>Established a data analytics department; increased reporting efficiency by 45%.</li>
          <li>Led automation of 15+ manual business processes using Microsoft Power Platform.</li>
          <li>Developed a Python-based tender bot to automate tender monitoring and alerts.</li>
          <li>Implemented ERP, Power BI, Teams integration, and disaster recovery plans.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Full Stack Web Development Bootcamp</h3>
        <p>HyperionDev | 2024</p>
        <ul>
          <li>Completed projects using MERN stack: React, Node.js, Express, MongoDB.</li>
          <li><a href="https://search-app-beta-final.onrender.com" target="_blank">iTunes Search App</a></li>
          <li><a href="https://kaseke-web-store-final.onrender.com" target="_blank">E-Commerce Platform</a></li>
          <li><a href="https://weather-app-4lxp.onrender.com" target="_blank">Weather App</a></li>
          <li><a href="https://my-bank-app-x71x.onrender.com" target="_blank">Banking Calculator</a></li>
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <h2>Key Projects</h2>
      <div className="project-category">
        <h3>Automated Medical Tender Bot</h3>
        <ul>
          <li>Developed a Python-based bot to monitor and filter PRAZ tenders for medical categories.</li>
          <li>Sends daily alerts via Microsoft Graph API with Excel attachments.</li>
          <li>Improves opportunity discovery and reduces manual effort by over 90%.</li>
          <li><a href="https://github.com/Jkaseke1/medical-tender-bot" target="_blank">View GitHub Repository</a></li>
        </ul>
      </div>
      <div className="project-category">
        <h3>Lunch Ordering Platform (Full Stack)</h3>
        <ul>
          <li>Developed internal lunch ordering system with real-time order tracking and role-based access.</li>
          <li><a href="https://github.com/Jkaseke1/PMC-Lunch-Site.git" target="_blank">View GitHub Repository</a></li>
        </ul>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="education-section">
      <h2>Education & Certifications</h2>
      <ul>
        <li>Full Stack Web Development - HyperionDev (2024)</li>
        <li>Sophos Network Engineer - Sophos (2023)</li>
        <li>Linux VoIP (Asterisk Networks) - 2022</li>
        <li>Advanced SQL Admin - Microsoft (2019)</li>
        <li>Cisco CCNA - Cisco (2019)</li>
      </ul>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Thank you for your message. I will respond promptly.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required disabled={isSubmitting} />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required disabled={isSubmitting} />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required disabled={isSubmitting} />
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default App;