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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
  
  const handleWhatsAppSend = () => {
    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }

    const whatsappMessage =
      `Hello Kalyan,%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

    const whatsappURL = `https://wa.me/917097173125?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
  };
  const handleEmailSend = () => {
    if (!name || !email || !message) {
      alert('Please fill all fields');
      return;
    }

    const mailtoLink =
      `mailto:kalyanch692@gmail.com?subject=New Contact Message&body=` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

    window.location.href = mailtoLink;
  };



  return (
    <div>
      <div style={{
        position: 'sticky', top: 0, background: '#eae0e0fe', zIndex: 1000,
        padding: '20px 30px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
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
      <div style={{ padding: '30px', background: '#c3b7b7fe' }}>
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
                        '<span style="font-weight:bold; color:#1976d2;">Kalyan Chekuru</span>'
                      );
                      return (
                        <p
                          key={i}
                          style={{ fontSize: '16px', color: '#363637fe', fontWeight: 'bold' }}
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
                        marginRight: '300px',
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
                  marginRight: '50px'
                }}
              >
                <h2 style={{ color: '#1976d2', fontWeight: 'bold' }}>{tab}</h2>
                <div style={{ maxWidth: '800px', marginBottom: '40px', color: '#363637fe', fontWeight: 'bold' }}>
                  {content[tab].split('\n').map((line, i) => (
                    <p key={i} style={{ fontSize: '16px' }}>{line}</p>
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '20px'
                }}>
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
                      Building expertise in front-end development while gaining strong skills in sales and client engagement. Experienced in developing responsive UI components, integrating REST APIs, and ensuring high performance in web applications. Also skilled in customer interaction, lead generation, and achieving sales targets across non-IT roles.
                    </p>

                    <div style={{ marginTop: '5px', marginRight: '38px' }}>
                      <p>✔️ React Developer at <strong>Virinchi</strong> (2024 – 2026 Present)</p>
                      <p>✔️ Inside Sales Specialist at <strong>Byju's</strong> (2022 – 2023)</p>
                      <p>✔️ Sales Associate at <strong>Mind Brink Media Pvt Ltd</strong> (2020 – 2022)</p>
                    </div>

                  </div>
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
                    <p style={{ fontWeight: 'bold' }}>GIST - Geethanjali Institute of Science & Technology</p>
                    <p style={{ fontSize: '14px', margin: '2px 0' }}>Bachelor of Technology (EEE) | 2015 – 2019 | GPA: 7.3</p>
                    <p style={{ fontSize: '13px', marginBottom: '10px' }}>
                      Specialized in Electrical and Electronics Engineering (EEE), gaining knowledge in circuit analysis, power systems, control systems, and problem-solving through analytical thinking.
                    </p>
                    <p style={{ fontWeight: 'bold' }}>Sasikanth Reddy Jr College</p>
                    <p style={{ fontSize: '14px', margin: '2px 0' }}>Intermediate (MPC) | 2013 – 2015 | GPA: 8.3</p>
                    <p style={{ fontWeight: 'bold' }}>New Little Flowers EM School</p>
                    <p style={{ fontSize: '14px', margin: '2px 0' }}>10th Standard | 2012 - 2013 | GPA: 8.2</p>
                  </div>
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
                      I specialize in modern front-end development with React, focusing on building scalable, maintainable, and high-performance web applications with excellent user experiences.
                    </p>

                    <div style={{ marginTop: '10px' }}>
                      <p>✔️ Building reusable components using React, Hooks, and Context API</p>
                      <p>✔️ State management with Redux and integration of RESTful APIs</p>
                      <p>✔️ Writing unit and integration tests with Jest and React Testing Library</p>
                      <p>✔️ Developing responsive and accessible UI for cross-browser compatibility</p>
                      <p>✔️ Optimizing performance, code quality, and user experience in web applications</p>
                    </div>
                  </div>


                </div>
              </div>
            ) : tab === 'Experience' ? (
              <div style={{ padding: '20px 0', marginRight: '30px' }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>{tab}</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#363637fe', fontWeight: 'bold' }}>
                  My journey developing technical, communication, and problem-solving skills across front-end development and sales roles.                </p>

                <div style={{
                  position: 'relative',
                  marginLeft: '300px',
                  borderLeft: '3px solid #1976d2',
                  paddingLeft: '30px'
                }}>
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
                    <h3 style={{ marginBottom: '8px' }}>React Developer (Web/Frontend)</h3>
                    <a href="#" style={{ color: '#4fc3f7', textDecoration: 'none' }}><strong>Virinchi</strong></a>
                    <p style={{ fontSize: '14px', margin: '5px 0 15px' }}>2024 – 2026 ( Present )</p>
                    <ul style={{ margin: '5px 0 15px', paddingLeft: '20px' }}>
                      <li>Developing scalable, high-performance front-end applications using React and Redux.</li>
                      <li>Built reusable UI components and integrated REST APIs for efficient data flow.</li>
                      <li>Optimized web applications for performance, accessibility, and cross-browser compatibility.</li>
                      <li>Collaborated with design and backend teams to deliver user-friendly interfaces.</li>
                    </ul>
                    <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Technologies:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                      {['React', 'Redux', 'JavaScript', 'HTML5/CSS3', 'APIs', 'Formik'].map((tech) => (
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
                    <h3 style={{ marginBottom: '8px' }}>Inside Sales Specialist</h3>
                    <a href="#" style={{ color: '#4fc3f7', textDecoration: 'none' }}><strong>Byju's</strong></a>
                    <p style={{ fontSize: '14px', margin: '5px 0 15px' }}>2022 – 2023</p>
                    <ul style={{ margin: '5px 0 15px', paddingLeft: '20px' }}>
                      <li>Managed inbound and outbound sales calls to generate leads and close enrollments.</li>
                      <li>Demonstrated products to potential customers, tailoring solutions to their needs.</li>
                      <li>Achieved monthly sales targets consistently and contributed to team growth.</li>
                      <li>Maintained accurate CRM records for all interactions and follow-ups.</li>
                    </ul>
                    <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Skills:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                      {['Lead Generation', 'CRM', 'Customer Engagement', 'Communication', 'Sales Target'].map((skill) => (
                        <span key={skill} style={{
                          background: '#1e293b',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          color: '#fff'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
                    <h3 style={{ marginBottom: '8px' }}>Sales Associate</h3>
                    <a href="#" style={{ color: '#4fc3f7', textDecoration: 'none' }}><strong>Mind Brink Media Pvt Ltd</strong></a>
                    <p style={{ fontSize: '14px', margin: '5px 0 15px' }}>2020 – 2022</p>
                    <ul style={{ margin: '5px 0 15px', paddingLeft: '20px' }}>
                      <li>Handled customer inquiries and provided product information to drive sales.</li>
                      <li>Maintained strong client relationships and followed up to ensure satisfaction.</li>
                      <li>Assisted in sales reporting, tracking performance metrics, and generating leads.</li>
                      <li>Worked with the marketing team to implement promotions and increase conversion rates.</li>
                    </ul>
                    <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Skills:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '8px' }}>
                      {['Client Management', 'Lead Generation', 'Sales Reporting', 'Customer Service', 'Communication'].map((skill) => (
                        <span key={skill} style={{
                          background: '#1e293b',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          color: '#fff'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ) : tab === 'Skills' ? (
              <div style={{ padding: '20px 0', backgroundColor: '#1a1a2e', color: '#fff', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center', fontSize: '2.5em', marginBottom: '10px' }}>Technical Skills</h2>
                <p style={{ textAlign: 'center', marginBottom: '20px', color: '#b0b0b0', fontSize: '1em' }}>
                  A showcase of my expertise in React development and related technologies.
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', marginBottom: '40px' }}>
                  <div
                    style={{
                      flex: '1',
                      padding: '30px',
                      background: '#0f0f1a',
                      borderRadius: '10px',
                      margin: '0 10px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        color: '#00d4ff',
                        marginBottom: '25px',
                        textAlign: 'left',
                      }}
                    >
                      React Ecosystem
                    </div>
                    {[
                      { name: 'React.js', proficiency: '90%' },
                      { name: 'JavaScript (ES6+)', proficiency: '85%' },
                      { name: 'React Hooks', proficiency: '85%' },
                      { name: 'Redux Toolkit', proficiency: '80%' },
                      { name: 'HTML5 & CSS3', proficiency: '85%' },
                      { name: 'Testing (Jest & RTL)', proficiency: '75%' },
                      { name: 'Git', proficiency: '80%' },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '14px',
                        }}
                      >
                        <span
                          style={{
                            flex: '2',
                            fontSize: '0.9em',
                            color: '#d0d0d0',
                          }}
                        >
                          {skill.name}
                        </span>
                        <div
                          style={{
                            flex: '6',
                            height: '10px',
                            backgroundColor: '#333',
                            borderRadius: '5px',
                            overflow: 'hidden',
                            margin: '0 10px',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              backgroundColor: '#00d4ff',
                              width: skill.proficiency,
                              borderRadius: '5px',
                              transition: 'width 0.3s ease',
                            }}
                          />
                        </div>
                        <span
                          style={{
                            flex: '1',
                            fontSize: '0.9em',
                            color: '#00d4ff',
                            textAlign: 'right',
                          }}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div style={{ flex: '1', padding: '20px', background: '#0f0f1a', borderRadius: '10px', margin: '0 10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#00d4ff', marginBottom: '15px', textAlign: 'left' }}>
                      Frontend UI & Tools
                    </div>

                    {[
                      { name: 'Material UI (MUI) & Icons', proficiency: '80%' },
                      { name: 'Formik', proficiency: '85%' },
                      { name: 'REST API Integration', proficiency: '80%' },
                      { name: 'Responsive Design', proficiency: '85%' },
                      { name: 'Flexbox & CSS Grid', proficiency: '85%' },
                      { name: 'Browser DevTools', proficiency: '78%' },
                      { name: 'UI Debugging', proficiency: '75%' },
                    ].map((skill, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ flex: '2', fontSize: '0.9em', color: '#d0d0d0' }}>{skill.name}</span>
                        <div style={{ flex: '6', height: '10px', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{ height: '100%', backgroundColor: '#00d4ff', width: skill.proficiency }} />
                        </div>
                        <span style={{ flex: '1', fontSize: '0.9em', color: '#00d4ff', textAlign: 'right' }}>
                          {skill.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>


                <h2 style={{ color: '#1976d2', textAlign: 'center', fontSize: '2.5em', marginBottom: '10px' }}>
                  Soft Skills
                </h2>

                <p style={{ textAlign: 'center', marginBottom: '20px', color: '#b0b0b0', fontSize: '1em' }}>
                  Key interpersonal skills that support effective frontend development.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      flex: '1 1 calc(50% - 20px)',
                      minWidth: '300px',
                      padding: '20px',
                      background: '#0f0f1a',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>
                      UI Problem Solving
                    </div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Strong ability to analyze UI issues, debug frontend bugs, and implement clean,
                      user-friendly solutions using React and modern web practices.
                    </p>
                  </div>
                  <div
                    style={{
                      flex: '1 1 calc(50% - 20px)',
                      minWidth: '300px',
                      padding: '20px',
                      background: '#0f0f1a',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>
                      Communication & Requirement Understanding
                    </div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Effective at understanding UI requirements, discussing features with team members,
                      and translating designs into functional and responsive interfaces.
                    </p>
                  </div>
                  <div
                    style={{
                      flex: '1 1 calc(50% - 20px)',
                      minWidth: '300px',
                      padding: '20px',
                      background: '#0f0f1a',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>
                      Team Collaboration
                    </div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Comfortable working with designers, backend developers, and QA teams to build
                      consistent, scalable, and maintainable frontend solutions.
                    </p>
                  </div>
                  <div
                    style={{
                      flex: '1 1 calc(50% - 20px)',
                      minWidth: '300px',
                      padding: '20px',
                      background: '#0f0f1a',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ fontSize: '1.2em', color: '#00d4ff', marginBottom: '10px' }}>
                      Time Management & Code Discipline
                    </div>
                    <p style={{ fontSize: '0.9em', color: '#d0d0d0' }}>
                      Skilled at managing tasks efficiently, meeting deadlines, and maintaining clean,
                      readable code with proper structure and documentation.
                    </p>
                  </div>
                </div>

              </div>
            ) : tab === 'Projects' ? (
              <div style={{ padding: '20px 0', marginRight: "30px" }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Projects</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#363637fe', fontWeight: 'bold' }}>
                  A showcase of my technical projects and contributions.
                </p>

                <div style={{
                  position: 'relative',
                  marginLeft: '300px',
                  borderLeft: '3px solid #1976d2',
                  paddingLeft: '30px'
                }}>
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
                    <h3 style={{ marginBottom: '8px' }}>React Project 1: Money Tree</h3>
                    <div style={{ fontSize: '14px', margin: '5px 0 15px', color: '#b3e5fc' }}>
                      React <span>Redux</span> <span>JavaScript</span> <span>HTML/CSS</span> <span>REST API</span>
                    </div>
                    <p>
                      Developed a US-based loan management platform called <strong>Money Tree</strong> using React and Redux. Focused on creating reusable components and efficient state management for a seamless user experience.
                    </p>
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
                    <p
                      style={{ color: '#4fc3f7', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' }}
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? 'Show Less' : 'Show More'}
                    </p>
                  </div>
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
                    <div style={{ fontSize: '14px', margin: '5px 0 15px', color: '#b3e5fc' }}>
                      React <span>HTML5</span> <span>CSS3</span> <span>Redux</span> <span>REST API</span>
                    </div>
                    <p>
                      Developed a US-based loan management and financial platform called <strong>Qfund11</strong> using React and Redux. Focused on responsive design, accessibility, and fast load times.
                    </p>
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
              <div style={{ padding: '20px 0', marginRight: "30px" }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Certifications</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#363637fe', fontWeight: 'bold' }}>
                  Professional credentials that validate my expertise in React and related technologies and sales.
                </p>

                <div style={{
                  display: 'flex',
                  position: 'relative',
                  marginLeft: '100px',
                  paddingLeft: '30px',
                  gap: '40px'
                }}>
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
                      <span style={{ color: '#4fc3f7' }}>React</span> <span>2025</span>
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
                  {showCertificate && (
                    <div style={{
                      position: 'fixed', top: 0, left: 0,
                      width: '100vw', height: '100vh',
                      backgroundColor: 'rgba(0,0,0,0.85)',
                      display: 'flex', justifyContent: 'center', alignItems: 'center',
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
                        border: '15px solid #1c73a5ff',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.6)',
                        fontFamily: 'Georgia, serif',
                      }}>
                        <div style={{
                          position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%) rotate(-20deg)',
                          width: '200px', height: '40px', backgroundColor: '#648390ff', textAlign: 'center',
                          lineHeight: '40px', fontWeight: 'bold', color: '#fff', fontSize: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                        }}>
                          React - Developer
                        </div>

                        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2', marginBottom: '15px' }}>Certificate of Completion</h1>
                        <p style={{ fontSize: '18px', marginBottom: '25px' }}>This certificate is proudly presented to</p>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d47a1', marginBottom: '25px' }}>Chekuru Kalyan</h2>
                        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                          For successfully completing the <strong>React Certified Developer</strong> program, demonstrating expertise in component-based architecture, state management, and building responsive React applications.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', padding: '0 60px' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '2px solid #1976d2', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
                            <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>Jane Smith</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>Instructor</p>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '2px solid #1976d2', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
                            <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>Dec 20, 2025</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>Date</p>
                          </div>
                        </div>

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
                        >Close</button>
                      </div>
                    </div>
                  )}
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
                    <h3 style={{ marginBottom: '8px' }}>Web/Front-End Based Certification</h3>
                    <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
                      <span style={{ color: '#4fc3f7' }}>React</span> <span>2024</span>
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
                  {showCertificate2 && (
                    <div style={{
                      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                      backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000, padding: '20px'
                    }}>
                      <div style={{
                        background: '#fff8f0', padding: '40px', borderRadius: '16px', maxWidth: '800px', width: '100%',
                        textAlign: 'center', position: 'relative', border: '15px solid #c0c0c0',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.6)', fontFamily: 'Georgia, serif',
                      }}>
                        <div style={{
                          position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%) rotate(-20deg)',
                          width: '180px', height: '40px', backgroundColor: '#c0c0c0', textAlign: 'center',
                          lineHeight: '40px', fontWeight: 'bold', color: '#0d47a1', fontSize: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                        }}>
                          Web/Front-End
                        </div>
                        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2', marginBottom: '15px' }}>Certificate of Completion</h1>
                        <p style={{ fontSize: '18px', marginBottom: '25px' }}>This certificate is proudly presented to</p>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d47a1', marginBottom: '25px' }}>Chekuru Kalyan</h2>
                        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                          For successfully completing the <strong>Web/Front-End Associate</strong> program, demonstrating foundational knowledge in React and basic component management.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px', marginTop: '50px' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '2px solid #0d47a1', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
                            <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>Mark Taylor</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#0d47a1' }}>Instructor</p>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '2px solid #0d47a1', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
                            <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#0d47a1' }}>Dec 15, 2024</p>
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
                    <h3 style={{ marginBottom: '8px' }}>Sales Expert Certification</h3>
                    <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
                      <span style={{ color: '#4fc3f7' }}>Sales</span> <span>2022-2023</span>
                    </div>
                    <p>
                      Validates expertise in sales strategies, client relationship management, and achieving performance targets.
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
                  {showCertificate3 && (
                    <div style={{
                      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                      backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000, padding: '20px'
                    }}>
                      <div style={{
                        background: '#fff4e6', padding: '40px', borderRadius: '16px', maxWidth: '800px', width: '100%',
                        textAlign: 'center', position: 'relative', border: '15px solid #ffa500', // Orange border for sales
                        boxShadow: '0 8px 25px rgba(0,0,0,0.6)', fontFamily: 'Georgia, serif',
                      }}>
                        <div style={{
                          position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%) rotate(20deg)',
                          width: '180px', height: '40px', backgroundColor: '#ddaf16ff', textAlign: 'center',
                          lineHeight: '40px', fontWeight: 'bold', color: '#fff', fontSize: '16px', boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                        }}>
                          Sales - Specialist
                        </div>
                        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1976d2', marginBottom: '15px' }}>Certificate of Completion</h1>
                        <p style={{ fontSize: '18px', marginBottom: '25px' }}>This certificate is proudly presented to</p>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0d47a1', marginBottom: '25px' }}>Chekuru Kalyan</h2>
                        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                          For successfully completing the <strong>Sales Expert Certification</strong> program, demonstrating skills in sales strategies, client relationship management, and achieving performance targets.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px', marginTop: '50px' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '2px solid #ffa500', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
                            <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#ffa500' }}>Sarah Johnson</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#ffa500' }}>Instructor</p>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '2px solid #ffa500', width: '220px', margin: '0 auto', marginBottom: '5px' }} />
                            <p style={{ margin: 0, fontSize: '16px', fontFamily: '"Brush Script MT", cursive', color: '#ffa500' }}>Dec 20, 2023</p>
                            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', fontStyle: 'normal', color: '#ffa500' }}>Date</p>
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

                <p style={{ textAlign: 'center', color: '#e73737ff', fontWeight: 'bold' }}>
                  * * * Continuously expanding my knowledge and skills through certifications and professional development. * * *
                </p>
              </div>

            ) : tab === 'Contact' ? (
              <div style={{ padding: '20px 0', marginRight: "30px" }}>
                <h2 style={{ color: '#1976d2', textAlign: 'center' }}>Get In Touch</h2>
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#363637fe', fontWeight: 'bold' }}>
                  Have a project in mind or want to discuss React based solutions/projects or any suggestions? I’d love to hear from you.
                </p>

                <div style={{
                  display: 'flex',
                  position: 'relative',
                  marginLeft: '200px',
                  paddingLeft: '30px',
                  gap: '40px'
                }}>
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
                      <p>
                        <span style={{ color: '#4fc3f7' }}>👤</span>{' '}
                        LinkedIn:{' '}
                        <a
                          href="https://www.linkedin.com/in/kalyan-chekuru-ba8829156"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#4fc3f7', textDecoration: 'none' }}
                        >
                          View Profile
                        </a>
                      </p>
                      <p><span style={{ color: '#4fc3f7' }}>🌍</span> Based In: India</p>
                    </div>
                    <h4 style={{ marginBottom: '8px' }}>Connect With Me</h4>

                                <div style={{ display: 'flex', gap: '12px' }}>

                                  {/* LinkedIn */}
                                  <a
                                    href="https://www.linkedin.com/in/kalyan-chekuru-ba8829156"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                    style={{
                                      width: '36px',
                                      height: '36px',
                                      background: '#0A66C2',
                                      borderRadius: '50%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textDecoration: 'none'
                                    }}
                                  >
                                    <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                                      <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.41-1.85 3.65 0 4.32 2.4 4.32 5.52v6.22zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                                    </svg>
                                  </a>

                                  {/* WhatsApp */}
                                  <a
                                    href="https://wa.me/917097173125"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="WhatsApp"
                                    style={{
                                      width: '36px',
                                      height: '36px',
                                      background: '#25D366',
                                      borderRadius: '50%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textDecoration: 'none'
                                    }}
                                  >
                                    <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.4 0 .02 5.38.02 12c0 2.1.55 4.16 1.6 5.98L0 24l6.2-1.62A11.93 11.93 0 0 0 12.04 24C18.66 24 24 18.62 24 12a11.9 11.9 0 0 0-3.48-8.52z" />
                                    </svg>
                                  </a>

                                  {/* GitHub */}
                                  <a
                                    href="https://github.com/KalyanCh123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                    style={{
                                      width: '36px',
                                      height: '36px',
                                      backgroundColor: '#24292e', // GitHub dark background
                                      borderRadius: '50%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textDecoration: 'none',
                                      cursor: 'pointer'
                                    }}
                                  >
                                    <span style={{ color: 'white', fontSize: '18px' }}>🐙</span>
                                  </a>
                                  <a
                                    href="https://wa.me/917097173125?text=Hello%20Kalyan,%20I%20want%20to%20connect"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Message Me"
                                    style={{
                                      width: '36px',
                                      height: '36px',
                                      background: '#1976d2',
                                      borderRadius: '50%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      textDecoration: 'none'
                                    }}
                                  >
                                    <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                    </svg>
                                  </a>

                                </div>

                              </div>
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
                    <h3 style={{ marginBottom: '8px' }}>Send a Message</h3>
                    <div style={{ fontSize: '14px', margin: '5px 0 15px' }}>
                      <input
                        type="text"
                        placeholder="kalyan . ch ( Your Name )"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          marginBottom: '10px',
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />

                      <input
                        type="email"
                        placeholder="kalyanch692@gmai.com( Your Email )"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          marginBottom: '10px',
                          background: '#1e293b',
                          border: 'none',
                          borderRadius: '8px',
                          color: '#fff'
                        }}
                      />

                      <textarea
                        placeholder="I'd like to discuss a React based project ...  ... ...( Your Message )"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                      />

                    </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                  <button
                                    onClick={handleWhatsAppSend}
                                    style={{
                                      background: '#25D366',
                                      color: 'white',
                                      padding: '10px 20px',
                                      border: 'none',
                                      borderRadius: '8px',
                                      cursor: 'pointer',
                                      width: '100%'
                                    }}
                                  >
                                    Send WhatsApp Message
                                  </button>

                                  <button
                                    onClick={handleEmailSend}
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
                                    Send via Email
                                  </button>
                                </div>
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
