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
          <Skills />
          <Experience /> {/* Experience now includes the Odoo ERP project */}
          <Projects />
          <Education />
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
          <a className="download-btn" href="/Joseph_Kaseke_CV.pdf" download>Download CV</a>
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
    <section id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-content">
          <h2>Professional Summary</h2>
          <p>IT Systems Administrator with 5+ years of experience in enterprise infrastructure management, specializing in data analytics implementation and systems integration. Recently completed a Full Stack Web Development bootcamp with HyperionDev, where I built scalable web apps using modern technologies. Proven track record of reducing system downtime by 60% and implementing data analytics solutions that increased operational efficiency by 45%.</p>
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

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>System & Network Administration</li>
            <li>Windows Server & Active Directory</li>
            <li>Cloud Infrastructure (AWS/Azure)</li>
            <li>Full Stack Development (MERN Stack)</li>
            <li>JavaScript/TypeScript</li>
            <li>React.js, Node.js, Express.js</li>
            <li>Data Analytics & Power BI</li>
            <li>API Development & Integration</li>
            <li>Microsoft Power Platform (Power Apps, Automate, Forms)</li>
            <li>Version Control (Git)</li>
            <li>Python (for automation/web scraping)</li>
            <li>Sage Evolution Pastel</li>
            <li>**Odoo ERP**</li> {/* Added Odoo to skills */}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Process Optimization</li>
          </ul>
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
        <h3>IT Systems Administrator & Digital Transformation Lead</h3>
        <p>Pulse Pharmaceuticals | 2019 - Present</p>
        <ul>
          <li>Maintained 99.9% uptime for core infrastructure supporting 150+ users.</li>
          <li>Implemented enterprise tools including Microsoft 365, Power BI, ERP, and Figjam.</li>
          <li>Established Data Analytics department, improving reporting by 45%.</li>
          <li>Reduced incident response by 60% via automation and monitoring systems.</li>
          <li>Created disaster recovery plan achieving 1-hour recovery objective through Acronis.</li>
          <li>Led the automation of over 15 manual business processes using Microsoft Forms, Power Automate, SharePoint, and Power Apps, achieving 100% paperless workflow.</li>
          <li>Developed and implemented a Python-based Tender-Bot for automated tender scraping, filtering, and email alerts for the sales and marketing teams.</li>
          <li>Improved processing speed by 70% and reduced form errors by over 90% through validation and automated approvals.</li>
          <li>Integrated workflows with department SharePoint libraries and Microsoft Teams channels for seamless document management.</li>
          <li>**Currently involved in the strategic implementation of Odoo ERP, transitioning from Sage Evolution Pastel. This initiative, jointly decided by IT and the company board, aims to centralize analytics, sales mobile functionalities, CRM, and other critical modules under one comprehensive system, optimizing operations and reducing disparate system costs.**</li> {/* New Odoo ERP point */}
        </ul>
      </div>

      <div className="experience-item">
        <h3>Full Stack Development Bootcamp</h3>
        <p>HyperionDev | 2024</p>
        <p>Completed an intensive training program focusing on modern web technologies including MERN stack development, enhancing my technical capabilities and project management skills.</p>
        <h4>Projects:</h4>
        <ul>
          <li><a href="https://search-app-beta-final.onrender.com" target="_blank" rel="noopener noreferrer">iTunes Search Application</a></li>
          <li><a href="https://kaseke-web-store-final.onrender.com" target="_blank" rel="noopener noreferrer">E-Commerce Platform</a></li>
          <li><a href="https://weather-app-4lxp.onrender.com" target="_blank" rel="noopener noreferrer">Weather Application</a></li>
          <li><a href="https://nationality-predictor.onrender.com" target="_blank" rel="noopener noreferrer">Nationality Predictor</a></li>
          <li><a href="https://my-bank-app-x71x.onrender.com" target="_blank" rel="noopener noreferrer">Banking Calculator</a></li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Key Projects & Achievements</h2>

      <div className="project-category">
        <h3>Data-Driven Decision Making with Power BI</h3>
        <ul>
          <li>Achieved **data-driven decision-making visibility** by designing and building interactive dashboards that report all business transactions from our ERP system, **Sage Evolution Pastel**.</li>
          <li>Empowered users from **CEO to sales representatives and managers** to gain immediate insights into sales behavior and operational performance.</li>
          <li>Provided comprehensive reporting on key metrics including: **sales by territory, sales by representative, credit book handling, monthly sales targeting, and identification of slow-moving inventory**.</li>
          <li>Transformed raw data into actionable intelligence, significantly enhancing strategic planning and operational efficiency across all selling aspects.</li>
        </ul>
      </div>

      <div className="project-category">
        <h3>Automated Tender-Bot (Python)</h3>
        <ul>
          <li>Developed a **Python-based web scraper** to automatically monitor the Procurement Regulatory Authority Zimbabwe (PRAZ) website for new tenders.</li>
          <li>Implemented **intelligent filtering** to identify medical-related tenders relevant to the company's sales and marketing teams.</li>
          <li>Designed and deployed an automated system that **sends daily email alerts** to sales representatives and marketing personnel, providing details of new tenders and those with approaching closing dates.</li>
          <li>Streamlined the tender discovery process, enabling proactive engagement with relevant opportunities and **reducing manual search efforts**.</li>
        </ul>
      </div>

      <div className="project-category">
        <h3>Microsoft Power Platform Automation & Digital Transformation</h3>
        <ul>
          <li>Led the company-wide initiative to **digitize and automate over 15 critical business processes**, transitioning from paper-based systems to digital workflows using **Microsoft SharePoint, Power Automate, and Power Apps**.</li>
          <li>Developed and implemented **automated approval workflows** for various forms, including: requisition, leave, trip expenditure, medical claim, finance journal approvals, wholesale deals, and salary advance requests.</li>
          <li>Achieved a **100% paperless workflow** for these processes, significantly reducing administrative overhead and physical documentation.</li>
          <li>Integrated Power BI for visualizing form submission metrics, enhancing transparency and data-driven decision-making.</li>
          <li>**Improved processing speed by 70%** and **reduced form errors by over 90%** through built-in validation and automated routing.</li>
        </ul>
      </div>

      <div className="project-category">
        <h3>Company Lunch Ordering Platform (Full Stack)</h3>
        <ul>
          <li>Developed a custom full stack lunch ordering application to streamline internal lunch requests.</li>
          <li>Integrated role-based access for staff and admin users with real-time order tracking.</li>
          <li>Improved lunch service efficiency and eliminated manual order processes.</li>
          <li><a href="https://github.com/Jkaseke1/PMC-Lunch-Site.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education & Certifications</h2>
      <ul>
        <li>Full Stack Web Development Certification - HyperionDev (2024)</li>
        <li>Sophos Network Engineer Certification (2023)</li>
        <li>Linux VoIP - Asterisks Networks (2022)</li>
        <li>Advanced SQL Database Administration - Microsoft (2019)</li>
        <li>Cisco CCNA Certification (2019)</li>
      </ul>
    </section>
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

    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for your message. I will respond promptly.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Information</h2>
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
    </section>
  );
}

export default App;