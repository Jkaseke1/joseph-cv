import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faDownload } from '@fortawesome/free-solid-svg-icons';

// Styles
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="content-grid">
          <Profile />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}

function Header() {
  return (
    <header className="glass-header">
      <div className="header-content">
        <div className="header-title">
          <h1>Joseph Kaseke - Full Stack Web Developer CV</h1>
        </div>
        <nav className="modern-nav">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Profile() {
  return (
    <section id="profile" className="profile card-effect">
      <div className="profile-container">
        <div className="profile-image-container">
          <img src="/profile-photo.jpg" alt="Joseph Kaseke" className="profile-image" />
        </div>
        <div className="profile-content">
          <div className="section-header">
            <h2>Joseph Kaseke</h2>
            <h3 className="subtitle">Full Stack Web Developer</h3>
          </div>
          <p>Full Stack Web Developer with comprehensive training in modern web technologies. Skilled in building responsive, user-centric applications using the MERN stack. Passionate about creating efficient, scalable solutions and continuously learning new technologies.</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills card-effect">
      <div className="section-header">
        <h2>Technical Skills</h2>
      </div>
      <div className="skills-grid">
        <div className="skill-item">Frontend: HTML5, CSS3, JavaScript (ES6+)</div>
        <div className="skill-item">React.js, Next.js, Redux</div>
        <div className="skill-item">Node.js, Express.js</div>
        <div className="skill-item">MongoDB, Mongoose</div>
        <div className="skill-item">RESTful APIs, JWT Authentication</div>
        <div className="skill-item">Git, GitHub, Version Control</div>
        <div className="skill-item">Responsive Design, Bootstrap</div>
        <div className="skill-item">Testing (Jest)</div>
      </div>
      <div className="section-header">
        <h2>Development Practices</h2>
      </div>
      <div className="skills-grid">
        <div className="skill-item">Agile Methodology</div>
        <div className="skill-item">Object-Oriented Programming</div>
        <div className="skill-item">Defensive Programming</div>
        <div className="skill-item">UI/UX Design Principles</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects card-effect">
      <div className="section-header">
        <h2>Projects</h2>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <h3>iTunes Search Web Application</h3>
          <ul>
            <li>Developed a full-stack web application using React and Express</li>
            <li>Integrated with the iTunes Search API</li>
            <li>Enabled users to search for content in the iTunes and Apple Books Stores</li>
            <li>Allowed users to save their favorite items</li>
            <li>Demonstrated proficiency in front-end and back-end development</li>
          </ul>
          <a href="https://search-app-beta-final.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        <div className="project-card">
          <h3>Web Store Capstone</h3>
          <ul>
            <li>Designed and developed a Web Store using React</li>
            <li>Showcased products from a fictional or real online store</li>
            <li>Consolidated knowledge of React, JSX, and JavaScript</li>
            <li>Demonstrated ability to create a fully functional e-commerce application</li>
          </ul>
          <a href="https://kaseke-web-store-final.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <ul>
            <li>Created a React app to display current weather in a particular city</li>
            <li>Used the Weather API to retrieve weather data</li>
            <li>Allowed users to enter city names to get weather data</li>
            <li>Optionally used geolocation to get the user's local weather</li>
          </ul>
          <a href="https://weather-app-4lxp.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        <div className="project-card">
          <h3>Nationality Predictor App</h3>
          <ul>
            <li>Created a React app to predict nationality based on a person's name</li>
            <li>Used the nationalize.io API to fetch nationality data</li>
            <li>Implemented auto-focused input field and a button to trigger the fetch</li>
            <li>Displayed details of the first object in the country array</li>
            <li>Used function components with useState, useEffect, and useRef hooks</li>
          </ul>
          <a href="https://nationality-predictor.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>

        <div className="project-card">
          <h3>Banking Interest Calculator App</h3>
          <ul>
            <li>Created a React app to simulate a banking application</li>
            <li>Displayed the user's current bank balance</li>
            <li>Allowed users to deposit and withdraw money</li>
            <li>Included functionality to add interest and charge bank fees</li>
            <li>Used at least two separate components with a shared state</li>
          </ul>
          <a href="https://my-bank-app-x71x.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
            View Project <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience card-effect">
      <div className="section-header">
        <h2>Experience</h2>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Full Stack Web Developer Bootcamp</h3>
          <p className="company">HyperionDev</p>
          <p className="date">2024</p>
          <ul>
            <li>Built multiple capstone projects including MERN stack applications</li>
            <li>Mastered modern web technologies including React, Node.js, Express, and MongoDB</li>
            <li>Implemented authentication, database management, and API development</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Web Developer Intern</h3>
          <p className="company">Pulse Pharmaceuticals</p>
          <p className="date">2024</p>
          <ul>
            <li>Developed responsive web applications using modern JavaScript frameworks</li>
            <li>Collaborated in an Agile development environment</li>
            <li>Developed and maintained an ongoing ordering system</li>
            <li>Maintained and updated the company's main website</li>
          </ul>
        </div>
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
      toast.success(`Thanks for reaching out, ${formData.name}! I'll get back to you soon.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact card-effect">
      <div className="section-header">
        <h2>Contact</h2>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
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
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default App;
