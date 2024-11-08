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
          <Profile />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
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
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Profile() {
  return (
    <section id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-content">
          <h2>Professional Summary</h2>
          <p>IT Systems Administrator with 5+ years of experience in enterprise infrastructure management, specializing in data analytics implementation and systems integration. Recently expanded expertise to include Full Stack Development through intensive training in modern web technologies. Proven track record of reducing system downtime by 60% and implementing data analytics solutions that increased operational efficiency by 45%.</p>
          <div className="contact-info">
            <a href="mailto:joseph.kaseke@email.com">Email: joseph.kaseke@email.com</a>
            <a href="https://www.linkedin.com/in/joseph-kaseke-6b27641b4/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            <a href="https://github.com/Jkaseke1" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            <a href="https://www.hyperiondev.com/portfolio/JK23120012827/" target="_blank" rel="noopener noreferrer">Development Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      
      <div className="experience-item">
        <h3>IT Systems Administrator</h3>
        <p>Pulse Pharmaceuticals | 2019 - Present</p>
        <ul>
          <li>Maintain 99.9% uptime for critical business systems including:</li>
          <ul>
            <li>Enterprise Internet Infrastructure serving 200+ users</li>
            <li>Microsoft 365 Environment and Active Directory</li>
            <li>Pastel Evolution ERP System</li>
            <li>Figjam Sales Force Automation Platform</li>
            <li>Microsoft Power BI Analytics Environment</li>
            <li>Sophos Antivirus and Security Infrastructure</li>
          </ul>
          <li>Established and manage Data Analytics department, resulting in 45% improvement in reporting efficiency</li>
          <li>Developed and maintain API integrations processing 10,000+ daily transactions</li>
          <li>Implemented automated monitoring systems reducing incident response time by 60%</li>
          <li>Designed and executed comprehensive disaster recovery plan:</li>
          <ul>
            <li>Conducted scheduled DR simulations with Acronis backup solution</li>
            <li>Successfully tested data verification and validity in cloud environment</li>
            <li>Achieved 1-hour recovery time objective through cloud server deployment</li>
            <li>Validated DR plan through user acceptance testing with core business functions</li>
          </ul>
        </ul>
      </div>

      <div className="education-section">
        <h3>Education & Certifications</h3>
        <ul>
          <li>Full Stack Web Development Certification - HyperionDev (2024)</li>
          <li>Sophos Network Engineer Certification (2023)</li>
          <li>Cisco CCNA Certification (2019)</li>
          <li>Advanced SQL Database Administration - Microsoft (2019)</li>
        </ul>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Infrastructure & Systems</h3>
          <ul>
            <li>System & Network Administration</li>
            <li>Windows Server & Active Directory</li>
            <li>Cloud Infrastructure (AWS/Azure)</li>
            <li>Virtualization (VMware/Hyper-V)</li>
            <li>System Security & Compliance</li>
            <li>Backup & Disaster Recovery</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Development & Programming</h3>
          <ul>
            <li>Full Stack Development (MERN Stack)</li>
            <li>JavaScript/TypeScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>MongoDB, SQL Databases</li>
            <li>API Development & Integration</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Business Intelligence</h3>
          <ul>
            <li>Data Analytics & Power BI</li>
            <li>ERP Systems Integration</li>
            <li>Business Process Automation</li>
            <li>Performance Monitoring</li>
            <li>SQL Server Reporting</li>
            <li>Data Visualization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Key Projects & Achievements</h2>
      
      <div className="project-category">
        <h3>IT Systems Administration Projects (2019-Present)</h3>
        <ul>
          <li>Developed and implemented real-time sales analytics system processing 10,000+ daily transactions</li>
          <li>Reduced report generation time by 75% through automated Power BI dashboards</li>
          <li>Integrated ERP data with custom API endpoints, improving data accuracy by 95%</li>
          <li>Implemented credit control monitoring system reducing overdue accounts by 40%</li>
          <li>Implemented a Sophos XG Firewall to enhance network security measures across the infrastructure</li>
        </ul>
      </div>

      <div className="project-category">
        <h3>Web Development Portfolio (2024)</h3>
        <ul>
          <li>iTunes Search Application - Full-stack MERN application with user authentication and favorites system
            <br />
            <a href="https://search-app-beta-final.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
          <li>E-Commerce Platform - React-based store with shopping cart and payment integration
            <br />
            <a href="https://kaseke-web-store-final.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
          <li>Weather Application - React application with geolocation and API integration
            <br />
            <a href="https://weather-app-4lxp.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
          <li>Nationality Predictor - React application with external API integration
            <br />
            <a href="https://nationality-predictor.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
          <li>Banking Calculator - Financial application with state management
            <br />
            <a href="https://my-bank-app-x71x.onrender.com" target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success(`Thank you for your message. I will respond promptly.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Information</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default App;