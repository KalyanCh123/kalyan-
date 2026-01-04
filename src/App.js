import { useState, useEffect } from 'react';
import './App.css';

const tabs = [
  'Home', 'About', 'Experience', 'Skills', 'Projects', 'Certifications', 'Contact'
];

const content = {
  Home: `Kalyan Chekuru
Experienced React Developer with a strong background in building dynamic, responsive, and high-
performance web applications. Proficient in modern JavaScript (ES6+), React.js, Redux, and component-
based architecture. Skilled in creating scalable front-end solutions with a focus on clean code, reusability,
and optimal user experience. Adept at integrating APIs, managing state effectively, and using testing
frameworks like Jest and React Testing Library to ensure application reliability.`,
  About: `Passionate React Developer with a strong focus on building dynamic, responsive, and high-performance web applications.
Skilled in creating scalable and reusable front-end solutions using modern JavaScript (ES6+),
React.js, Redux, and component-based architecture. Dedicated to delivering high-quality, user-centric applications through clean code,
testing frameworks like Jest and React Testing Library, and best practices in software development.`,
  Experience: "Worked at XYZ Company for 2 years.\nBuilt scalable web systems.",
  Skills: "Proficient in React, Node.js, and Python.\nAlso skilled in UI/UX design.",
  Projects: "Created multiple full-stack apps.\nExplore them on my GitHub.",
  Certifications: "Certified in Full Stack Development.\nAlso earned AWS Cloud Practitioner.",
  Contact: "You can reach me via email.\nAlso available on LinkedIn.",
};

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showMore, setShowMore] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showCertificate2, setShowCertificate2] = useState(false);
  const [showCertificate3, setShowCertificate3] = useState(false);

  const scrollToSection = (tab) => {
    setActiveTab(tab);
    document.getElementById(tab.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => {
      tabs.forEach((tab) => {
        const section = document.getElementById(tab.toLowerCase());
        const top = section.getBoundingClientRect().top;
        if (top <= 120 && top >= -120) setActiveTab(tab);
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Header */}
      <div style={{
        position: 'sticky', top: 0, background: '#fff', zIndex: 1000,
        padding: '20px 30px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1976d2' }}>Kalyan . Ch</div>
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', marginRight: '200px' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              style={{
                padding: '8px 12px',
                background: activeTab === tab ? '#1976d2' : '#eee',
                color: activeTab === tab ? '#fff' : '#000',
                border: 'none', borderRadius: '4px', cursor: 'pointer'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '30px' }}>
        {tabs.map((tab) => (
          <div key={tab} id={tab.toLowerCase()} style={{ marginBottom: '5px', paddingTop: '5px' }}>
            {tab === 'Home' ? (
              <>
                <h2 style={{ color: '#1976d2' }}>{tab}</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px' }}>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    {content[tab].split('\n').map((line, i) => {
                      const highlightedLine = line.replace(
                        /Kalyan Chekuru/,
                        '<span style="font-weight:bold; color:#007acc;">Kalyan Chekuru</span>'
                      );
                      return (
                        <p
                          key={i}
                          style={{ fontSize: '16px' }}
                          dangerouslySetInnerHTML={{ __html: highlightedLine }}
                        />
                      );
                    })}
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <img
                      src="/kalyan.jpeg"
                      alt="kalyan"
                      style={{
                        maxWidth: '250px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        marginRight: '300px'
                      }}
                    />
                  </div>
                </div>
              </>
            ) : tab === 'About' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  paddingBottom: '50px',
                  marginRight:'50px'
                }}
              >
                <h2 style={{ color: '#1976d2' }}>{tab}</h2>
                <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
                  {content[tab].split('\n').map((line, i) => (
                    <p key={i} style={{ fontSize: '16px' }}>{line}</p>
                  ))}
                </div>
            
                {/* New Card Section */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px'
                }}>
                  {/* Card 1: Professional Background */}
                  <div style={{
                    background: '#cd2883ff',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '16px',
                    width: '300px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                  }}>
                    <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <span role="img" aria-label="briefcase">💼</span> Professional Background
                    </div>
                    <p>
  React Developer at <strong>Virinchi</strong>, specializing in building scalable, high-performance front-end applications.
  Experienced in developing responsive UI components, integrating REST APIs, and ensuring optimal performance and user experience through best practices in React, Redux, and modern JavaScript.
</p>
                    <div style={{ marginTop: '5px', paddingLeft: '5px' }}>
                      <p>✔️ Consultant at Virinchi (2025 – Present)</p>
                      <p>✔️ Developer at Virinchi (2025 – 2026)</p>
                    </div>
                  </div>
            
                  {/* Card 2: Education */}
                  <div style={{
                    background: '#ad721fff',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '16px',
                    width: '300px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                  }}>
                    <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <span role="img" aria-label="graduation">🎓</span> Education
                    </div>
                    <p style={{ fontWeight: 'bold' }}>JNTU Anantapur</p>
                    <p style={{ fontSize: '14px', marginBottom: '10px' }}>Bachelor of Technology</p>
                    <p>
  Specialized in Electrical and Electronics Engineering (EEE), building a strong foundation in circuit analysis, power systems, control systems, and problem-solving through analytical thinking.
</p>
                  </div>
            
                  {/* Card 3: Specializations */}
                  <div style={{
                    background: '#0d47a1',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '16px',
                    width: '300px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.4)'
                  }}>
                    <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                      <span role="img" aria-label="bolt">⚡</span> Specializations
                    </div>
                    <p>
  I specialize in modern React development, focusing on building scalable, maintainable, and performant front-end applications with exceptional user experiences.
</p>
<ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
  <li>✔️ Building reusable components using React, Hooks, and Context API</li>
  <li>✔️ State management with Redux and integration of RESTful APIs</li>
  <li>✔️ Testing with Jest and React Testing Library</li>
</ul>

                  </div>
                </div>
              </div>
            ) : tab === 'Experience' ? (
              <div style={{ padding: '20px 0',marginRight:'30px' }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>{tab}</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#555' }}>
                  My journey building expertise in front-end development and implementation.
                </p>
            
                <div style={{
                  position: 'relative',
                  marginLeft: '300px',
                  borderLeft: '3px solid #1976d2',
                  paddingLeft: '30px'
                }}>
                  
                  {/* Experience 1 */}
                  <div style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    position: 'relative',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    maxWidth: '700px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '-43px',
                      top: '20px',
                      backgroundColor: '#1976d2',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '3px solid white'
                    }} />
                    <h3 style={{ marginBottom: '8px' }}>Consultant</h3>
                    <a href="#" style={{ color: '#4fc3f7', textDecoration: 'none' }}><strong>Virinchi</strong></a>
                    <p style={{ fontSize: '14px', margin: '5px 0 15px' }}>2025 – Present</p>
                    <p>
                      React Developer at <strong>Virinchi</strong>, specializing in scalable, high-performance front-end applications. 
                      Worked on reusable UI components, REST APIs, and performance optimization using best practices in React and Redux.
                    </p>
                    <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Technologies:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                      {['React', 'Redux', 'JavaScript', 'Jest', 'APIs'].map((tech) => (
                        <span key={tech} style={{
                          background: '#1e293b',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          color: '#fff'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
            
                  {/* Experience 2 */}
                  <div style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    position: 'relative',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    maxWidth: '700px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '-43px',
                      top: '20px',
                      backgroundColor: '#1976d2',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '3px solid white'
                    }} />
                    <h3 style={{ marginBottom: '8px' }}>Developer</h3>
                    <a href="#" style={{ color: '#4fc3f7', textDecoration: 'none' }}><strong>Virinchi</strong></a>
                    <p style={{ fontSize: '14px', margin: '5px 0 15px' }}>2025 – 2026</p>
                    <p>
                      Contributed to UI development and front-end optimization, maintaining clean code and high accessibility standards. 
                      Collaborated across teams to deliver consistent and visually appealing UI.
                    </p>
                    <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Technologies:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                      {['React', 'HTML5', 'CSS3', 'GitHub', 'Responsive Design'].map((tech) => (
                        <span key={tech} style={{
                          background: '#1e293b',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          color: '#fff'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ):tab === 'Skills' ? (
              <div style={{ padding: '20px 0', backgroundColor: '#1a1a2e', color: '#fff', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center', fontSize: '2.5em', marginBottom: '10px' }}>Technical Skills</h2>
                <p style={{ textAlign: 'center', marginBottom: '20px', color: '#b0b0b0', fontSize: '1em' }}>
                  A showcase of my expertise in React development and related technologies.
                </p>
            
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
                  <div style={{ flex: '1', padding: '20px', background: '#0f0f1a', borderRadius: '10px', margin: '0 10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#00d4ff', marginBottom: '15px', textAlign: 'left' }}>React Ecosystem</div>
                    {[
                      { name: 'React.js', proficiency: '90%' },
                      { name: 'JavaScript (ES6+)', proficiency: '85%' },
                      { name: 'Redux', proficiency: '80%' },
                      { name: 'Node.js', proficiency: '75%' },
                      { name: 'HTML5 & CSS3', proficiency: '85%' },
                      { name: 'Testing (Jest & RTL)', proficiency: '80%' },
                      { name: 'Git', proficiency: '80%' },
                    ].map((skill, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', textAlign: 'left' }}>
                        <span style={{ flex: '2', fontSize: '0.9em', color: '#d0d0d0' }}>{skill.name}</span>
                        <div style={{ flex: '6', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', backgroundColor: '#00d4ff', width: skill.proficiency, borderRadius: '5px', transition: 'width 0.3s ease' }}></div>
                        </div>
                        <span style={{ flex: '1', fontSize: '0.9em', color: '#00d4ff', textAlign: 'right' }}>{skill.proficiency}</span>
                      </div>
                    ))}
                  </div>
            
                  <div style={{ flex: '1', padding: '20px', background: '#0f0f1a', borderRadius: '10px', margin: '0 10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#00d4ff', marginBottom: '15px', textAlign: 'left' }}>Automation Skills</div>
                    {[
                      { name: 'Webpack', proficiency: '80%' },
                      { name: 'Babel', proficiency: '75%' },
                      { name: 'TypeScript', proficiency: '82%' },
                      { name: 'Jest', proficiency: '80%' },
                      { name: 'Git', proficiency: '80%' },
                      { name: 'Webpack', proficiency: '85%' },
                      { name: 'Playwright', proficiency: '80%' },
                    ].map((skill, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', textAlign: 'left' }}>
                        <span style={{ flex: '2', fontSize: '0.9em', color: '#d0d0d0' }}>{skill.name}</span>
                        <div style={{ flex: '6', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', backgroundColor: '#00d4ff', width: skill.proficiency, borderRadius: '5px', transition: 'width 0.3s ease' }}></div>
                        </div>
                        <span style={{ flex: '1', fontSize: '0.9em', color: '#00d4ff', textAlign: 'right' }}>{skill.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
            
                <h2 style={{ color: '#1976d2', textAlign: 'center', fontSize: '2.5em', marginBottom: '10px' }}>Soft Skills</h2>
                <p style={{ textAlign: 'center', marginBottom: '20px', color: '#b0b0b0', fontSize: '1em' }}>
                  A showcase of my interpersonal and professional abilities.
                </p>
            
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: '1200px', margin: '0 auto', gap: '20px' }}>
                  {/* Soft Skill 1: Problem Solving & Analytical Thinking */}
                  <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px', padding: '20px', background: '#0f0f1a', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'left' }}>
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>Problem Solving & Analytical Thinking</div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Adept at breaking down complex issues into manageable components and developing effective solutions through systematic analysis and creative thinking.
                    </p>
                  </div>
            
                  {/* Soft Skill 2: Communication & Client Consultation */}
                  <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px', padding: '20px', background: '#0f0f1a', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'left' }}>
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>Communication & Client Consultation</div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Skilled in clear, concise communication with both technical and non-technical stakeholders, ensuring requirements are understood and expectations are managed effectively.
                    </p>
                  </div>
            
                  {/* Soft Skill 3: Team Collaboration & Adaptability */}
                  <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px', padding: '20px', background: '#0f0f1a', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'left' }}>
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>Team Collaboration & Adaptability</div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Thrive in collaborative environments, contributing positively to team dynamics while remaining flexible and adaptable to changing project requirements and technologies.
                    </p>
                  </div>
            
                  {/* Soft Skill 4: Time Management & Documentation */}
                  <div style={{ flex: '1 1 calc(50% - 20px)', minWidth: '300px', padding: '20px', background: '#0f0f1a', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'left' }}>
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>Time Management & Documentation</div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Excellent at prioritizing tasks, meeting deadlines, and creating comprehensive technical documentation that enhances project clarity and knowledge transfer.
                    </p>
                  </div>
                </div>
              </div>
            ):tab === 'Projects' ? (
              <div style={{ padding: '20px 0',marginRight:"30px" }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Projects</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#555' }}>
                  A showcase of my technical projects and contributions.
                </p>
            
                <div style={{
                  position: 'relative',
                  marginLeft: '300px',
                  borderLeft: '3px solid #1976d2',
                  paddingLeft: '30px'
                }}>
            
                  {/* Project 1 */}
                  <div style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '40px',
      position: 'relative',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    maxWidth: '700px'
    }}>
      {/* Circle Indicator */}
      <div style={{
        position: 'absolute',
        left: '-43px',
        top: '20px',
        backgroundColor: '#1976d2',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        border: '3px solid white'
      }} />

      {/* Project Title */}
      <h3 style={{ marginBottom: '8px' }}>React Project 1: Money Tree</h3>

      {/* Tech Stack */}
      <div style={{ fontSize: '14px', margin: '5px 0 15px', color: '#b3e5fc' }}>
        React <span>Redux</span> <span>JavaScript</span> <span>HTML/CSS</span> <span>REST API</span>
      </div>

      {/* Short Description */}
      <p>
        Developed a US-based loan management platform called <strong>Money Tree</strong> using React and Redux. Focused on creating reusable components and efficient state management for a seamless user experience.
      </p>

      {/* Additional Details (Show More) */}
      {showMore && (
        <div style={{ 
          marginTop: '10px', 
          fontSize: '14px', 
          color: '#e0f7fa'
        }}>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li>Implemented dynamic loan application forms with validation using React Hooks and Formik.</li>
            <li>Integrated RESTful APIs to fetch and display loan data in real-time.</li>
            <li>Designed a responsive dashboard with charts showing loan status and repayment schedules.</li>
            <li>Optimized front-end performance using memoization and lazy loading.</li>
            <li>Ensured accessibility and cross-browser compatibility for a wide range of users.</li>
            <li>Implemented client-side routing using React Router for smooth navigation.</li>
          </ul>
        </div>
      )}

      {/* Show More / Show Less toggle */}
      <p 
        style={{ color: '#4fc3f7', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </p>
    </div>
            
                  {/* Project 2 */}
                  <div style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    position: 'relative',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    maxWidth: '700px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '-43px',
                      top: '20px',
                      backgroundColor: '#1976d2',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '3px solid white'
                    }} />
                    <h3 style={{ marginBottom: '8px' }}>React Project 2: Qfund11</h3>

      {/* Tech Stack */}
      <div style={{ fontSize: '14px', margin: '5px 0 15px', color: '#b3e5fc' }}>
        React <span>HTML5</span> <span>CSS3</span> <span>Redux</span> <span>REST API</span>
      </div>

      {/* Short Description */}
      <p>
        Developed a US-based loan management and financial platform called <strong>Qfund11</strong> using React and Redux. Focused on responsive design, accessibility, and fast load times.
      </p>

      {/* Additional Details (Show More) */}
      {showMore && (
        <div style={{ marginTop: '10px', fontSize: '14px', color: '#e0f7fa' }}>
          <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
            <li>Implemented dynamic loan application forms with real-time validation using React Hooks.</li>
            <li>Integrated RESTful APIs to manage loan data, user accounts, and payment schedules.</li>
            <li>Designed a responsive dashboard to track loan applications, approvals, and repayments.</li>
            <li>Optimized performance using code splitting, lazy loading, and memoization.</li>
            <li>Ensured accessibility for a wide range of users following WCAG guidelines.</li>
            <li>Collaborated with back-end developers to implement secure authentication and data handling.</li>
            <li>Implemented reusable components to improve development speed and maintainability.</li>
          </ul>
        </div>
      )}

      {/* Show More / Show Less toggle */}
      <p
        style={{ color: '#4fc3f7', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Less' : 'Show More'}
      </p>
    </div>
                </div>
              </div>
            ) : tab === 'Certifications' ? (
              <div style={{ padding: '20px 0',marginRight:"30px" }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Certifications</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#555' }}>
                  Professional credentials that validate my expertise in React and related technologies.
                </p>
            
                <div style={{
                  display:'flex',
                  position: 'relative',
                  marginLeft: '100px',
                  paddingLeft: '30px',
                  gap: '40px'

                }}>
            
                  {/* Certification 1 */}
                   <div style={{
        background: '#0f172a',
        color: 'white',
        padding: '25px',
        borderRadius: '12px',
        marginBottom: '40px',
        position: 'relative',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
        maxWidth: '700px',
      }}>
        <h3 style={{ marginBottom: '8px' }}>React Certified Developer</h3>
        <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
          <span style={{ color: '#4fc3f7' }}>React</span> <span>2022</span>
        </div>
        <p>
          Validates skills in developing custom applications using React, including component-based architecture and state management.
        </p>
         <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p
      style={{ color: '#ffd700', cursor: 'pointer', fontWeight: 'bold', margin: 0 }}
      onClick={() => setShowCertificate(true)}
    >
      View Certificate
    </p>
  </div>
      </div>

      {/* Modal Certificate */}
      {showCertificate && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
          padding: '20px',
        }}>
          <div style={{
            background: '#fff',
            padding: '40px',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            border: '15px solid #ffd700', // Gold border for premium feel
            boxShadow: '0 8px 25px rgba(0,0,0,0.6)',
            fontFamily: 'Georgia, serif',
          }}>
            {/* Ribbon Top */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '40px',
              backgroundColor: '#ffd700',
              borderRadius: '10px 10px 0 0',
              textAlign: 'center',
              lineHeight: '40px',
              fontWeight: 'bold',
              color: '#0d47a1',
              fontSize: '16px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            }}>
              CERTIFICATE
            </div>

            {/* Title */}
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2', marginBottom: '15px' }}>
              Certificate of Completion
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: '18px', marginBottom: '25px' }}>
              This certificate is proudly presented to
            </p>

            {/* Name */}
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d47a1', marginBottom: '25px' }}>
              Chekuru Kalyan
            </h2>

            {/* Description */}
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
              For successfully completing the <strong>React Certified Developer</strong> program, demonstrating expertise in component-based architecture, state management, and building responsive React applications.
            </p>

            {/* Signature Section */}
            {/* Signature Section */}
<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', padding: '0 60px' }}>
  {/* Instructor */}
  <div style={{ textAlign: 'center' }}>
    {/* Simulated signature line */}
    <div style={{ borderTop: '2px solid #1976d2', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
    <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>
      Jane Smith
    </p>
    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>
      Instructor
    </p>
  </div>

  {/* Date */}
  <div style={{ textAlign: 'center' }}>
    <div style={{ borderTop: '2px solid #1976d2', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
    <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>
      Jan 1, 2022
    </p>
    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>
      Date
    </p>
  </div>
</div>


            {/* Close Button */}
            <button 
              onClick={() => setShowCertificate(false)}
              style={{
                marginTop: '50px',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#1976d2',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '16px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}           
                  {/* Certification 2 */}
                  {/* Certification 2 Card */}
<div style={{
  background: '#0f172a',
  color: 'white',
  padding: '25px',
  borderRadius: '12px',
  marginBottom: '40px',
  position: 'relative',
  boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
  maxWidth: '700px'
}}>
  <h3 style={{ marginBottom: '8px' }}>React Certified Associate</h3>
  <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
    <span style={{ color: '#4fc3f7' }}>React</span> <span>2023</span>
  </div>
  <p>
    Demonstrates foundational React knowledge, including navigating the framework, understanding key concepts, and basic component support.
  </p>
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p
      style={{ color: '#ffd700', cursor: 'pointer', fontWeight: 'bold', margin: 0 }}
      onClick={() => setShowCertificate2(true)}
    >
      View Certificate
    </p>
  </div>
</div>

{/* Modal for Certification 2 */}
{showCertificate2 && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000, padding: '20px'
  }}>
    <div style={{
      background: '#fff8f0', padding: '40px', borderRadius: '16px', maxWidth: '800px', width: '100%',
      textAlign: 'center', position: 'relative', border: '15px solid #c0c0c0', // silver border
      boxShadow: '0 8px 25px rgba(0,0,0,0.6)', fontFamily: 'Georgia, serif',
    }}>
      {/* Ribbon Top */}
      <div style={{
        position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%) rotate(-20deg)',
        width: '140px', height: '40px', backgroundColor: '#c0c0c0', textAlign: 'center',
        lineHeight: '40px', fontWeight: 'bold', color: '#0d47a1', fontSize: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      }}>
        ASSOCIATE
      </div>

      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2', marginBottom: '15px' }}>Certificate of Completion</h1>
      <p style={{ fontSize: '18px', marginBottom: '25px' }}>This certificate is proudly presented to</p>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d47a1', marginBottom: '25px' }}>Chekuru Kalyan</h2>
      <p style={{ fontSize: '18px', marginBottom: '40px' }}>
        For successfully completing the <strong>React Certified Associate</strong> program, demonstrating foundational knowledge in React and basic component management.
      </p>

      {/* Signature Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px', marginTop: '50px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ borderTop: '2px solid #0d47a1', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
          <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>Mark Taylor</p>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>Instructor</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ borderTop: '2px solid #0d47a1', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
          <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>Jun 15, 2023</p>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>Date</p>
        </div>
      </div>

      <button
        onClick={() => setShowCertificate2(false)}
        style={{
          marginTop: '50px', padding: '12px 30px', border: 'none', borderRadius: '8px',
          backgroundColor: '#1976d2', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px'
        }}
      >Close</button>
    </div>
  </div>
)}
<br/><br/><br/>
            
                  {/* Certification 3 */}
                  {/* Certification 3 Card */}
<div style={{
  background: '#0f172a',
  color: 'white',
  padding: '25px',
  borderRadius: '12px',
  marginBottom: '40px',
  position: 'relative',
  boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
  maxWidth: '700px'
}}>
  <h3 style={{ marginBottom: '8px' }}>React Certified AI Associate</h3>
  <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
    <span style={{ color: '#4fc3f7' }}>React</span> <span>2024</span>
  </div>
  <p>
    Validates proficiency in AI-powered React features, including data analysis, predictive modeling, and ethical AI use.
  </p>
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <p
      style={{ color: '#ffd700', cursor: 'pointer', fontWeight: 'bold', margin: 0 }}
      onClick={() => setShowCertificate3(true)}
    >
      View Certificate
    </p>
  </div>
</div>

{/* Modal for Certification 3 */}
{showCertificate3 && (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000, padding: '20px'
  }}>
    <div style={{
      background: '#f4f4f8', padding: '40px', borderRadius: '16px', maxWidth: '800px', width: '100%',
      textAlign: 'center', position: 'relative', border: '15px solid #1976d2', // blue border
      boxShadow: '0 8px 25px rgba(0,0,0,0.6)', fontFamily: 'Georgia, serif',
    }}>
      {/* Ribbon Top */}
      <div style={{
        position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%) rotate(20deg)',
        width: '160px', height: '40px', backgroundColor: '#1976d2', textAlign: 'center',
        lineHeight: '40px', fontWeight: 'bold', color: '#fff', fontSize: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      }}>
        AI ASSOCIATE
      </div>

      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#0d47a1', marginBottom: '15px' }}>Certificate of Completion</h1>
      <p style={{ fontSize: '18px', marginBottom: '25px' }}>This certificate is proudly presented to</p>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1976d2', marginBottom: '25px' }}>Chekuru Kalyan</h2>
      <p style={{ fontSize: '18px', marginBottom: '40px' }}>
        For successfully completing the <strong>React Certified AI Associate</strong> program, demonstrating skills in AI-powered React development, predictive modeling, and best practices for integrating AI responsibly.
      </p>

      {/* Signature Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px', marginTop: '50px' }}>
        {/* Instructor */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ borderTop: '2px solid #1976d2', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
          <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#1976d2' }}>Dr. Emily Wong</p>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#1976d2' }}>Instructor</p>
        </div>
        {/* Date */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ borderTop: '2px solid #1976d2', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
          <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#1976d2' }}>Dec 10, 2024</p>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#1976d2' }}>Date</p>
        </div>
      </div>

      <button
        onClick={() => setShowCertificate3(false)}
        style={{
          marginTop: '50px', padding: '12px 30px', border: 'none', borderRadius: '8px',
          backgroundColor: '#1976d2', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px'
        }}
      >Close</button>
    </div>
  </div>
)}

                </div>
                <p style={{ textAlign: 'center', color: '#1e90ff' }}>
                  Continuously expanding my knowledge and skills through certifications and professional development.
                </p>
              </div>
            ) : tab === 'Contact' ? (
              <div style={{ padding: '20px 0',marginRight:"30px" }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Get In Touch</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#555' }}>
                  Have a project in mind or want to discuss React based solutions? I’d love to hear from you.
                </p>
            
                <div style={{
                  display: 'flex',
                  position: 'relative',
                  marginLeft: '200px',
                  paddingLeft: '30px',
                  gap: '40px'
                }}>

            
                  {/* Contact Information */}
                  <div style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    position: 'relative',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    maxWidth: '700px'
                  }}>
                    <h3 style={{ marginBottom: '8px' }}>Contact Information</h3>
                    <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
                      <p><span style={{ color: '#4fc3f7' }}>📧</span> Email: kalyanch692@gmail.com</p>
                      <p><span style={{ color: '#4fc3f7' }}>👤</span> LinkedIn: linkedin.com/in/kalyan-ch</p>
                      <p><span style={{ color: '#4fc3f7' }}>🌍</span> Based In: India</p>
                    </div>
                    <h4 style={{ marginBottom: '8px' }}>Connect With Me</h4>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: '#1e90ff', cursor: 'pointer' }}>in</span>
                      <span style={{ color: '#1e90ff', cursor: 'pointer' }}>✉️</span>
                      <span style={{ color: '#1e90ff', cursor: 'pointer' }}>🐙</span>
                      <span style={{ color: '#1e90ff', cursor: 'pointer' }}>💬</span>
                    </div>
                  </div>
            
                  {/* Send Message Form */}
                  <div style={{
                    background: '#0f172a',
                    color: 'white',
                    padding: '25px',
                    borderRadius: '12px',
                    marginBottom: '40px',
                    position: 'relative',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    maxWidth: '700px'
                  }}>
                    {/* <div style={{
                      position: 'absolute',
                      left: '-43px',
                      top: '20px',
                      backgroundColor: '#1976d2',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '3px solid white'
                    }} /> */}
                    <h3 style={{ marginBottom: '8px' }}>Send a Message</h3>
                    <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        style={{
                          width: '100%',
                          padding: '10px',
                          marginBottom: '10px',
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                        defaultValue="Kalyan chekuru ( Your Name )"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        style={{
                          width: '100%',
                          padding: '10px',
                          marginBottom: '10px',
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                        defaultValue="kalyan@example.com ( Your Mail )"
                      />
                      <textarea
                        placeholder="Your Message"
                        style={{
                          width: '100%',
                          padding: '10px',
                          marginBottom: '10px',
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff',
                          height: '100px'
                        }}
                        defaultValue="I'd like to discuss a React based project ...  ... ..."
                      />
                    </div>
                    <button
                      style={{
                        background: '#1976d2',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            ) :
             (
            
              <>
                <h2 style={{ color: '#1976d2' }}>{tab}</h2>
                {content[tab].split('\n').map((line, i) => (
                  <p key={i} style={{ fontSize: '16px' }}>{line}</p>
                ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
