import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "University Event Management System ",
    description:
      "A clean event management system built with JavaScript to manage and track university events, attendence by using QR-code.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "Numaco Engineering – Industrial Business Website",
    description:
      "Developed a responsive business website for Numaco Engineering, specializing in pipes, valves, and motors. Showcases industrial products with a clean, professional design.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "API","php"],
    github: "#",
    demo: "#",
  },
];

const skills = [
  { name: "HTML5", level: "95%" },
  { name: "CSS3", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "React", level: "75%" },
  { name: "Git & GitHub", level: "80%" },
  { name: "Responsive Design", level: "90%" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          R<span>.</span>S
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              Available for opportunities
            </p>

            <h1>
              Hi, I'm <span>Rania Sheikh</span>
              <br />
              Frontend Developer.
            </h1>

            <p className="hero-description">
              I build modern, responsive and user-friendly websites with
              clean code and thoughtful design.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="#" aria-label="GitHub">
                GitHub ↗
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn ↗
              </a>
              <a href="#" aria-label="Fiverr">
                Fiverr ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="code-card">
              <div className="window-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>portfolio.jsx</p>
              </div>

              <div className="code-content">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  <span className="pink">name</span>:{" "}
                  <span className="green">'Rania Sheikh'</span>,
                </p>

                <p className="indent">
                  <span className="pink">role</span>:{" "}
                  <span className="green">'Frontend Developer'</span>,
                </p>

                <p className="indent">
                  <span className="pink">skills</span>: [
                </p>

                <p className="double-indent">
                  <span className="green">'HTML'</span>,{" "}
                  <span className="green">'CSS'</span>,
                </p>

                <p className="double-indent">
                  <span className="green">'JavaScript'</span>,{" "}
                  <span className="green">'React'</span>
                </p>

                <p className="indent">],</p>

                <p className="indent">
                  <span className="pink">passion</span>:{" "}
                  <span className="green">'Creating'</span>
                </p>

                <p>{"};"}</p>

                <p className="cursor-line">
                  <span className="cursor"></span>
                </p>
              </div>
            </div>

            <div className="floating-card card-one">
              <span>&lt;/&gt;</span>
              <div>
                <strong>Clean Code</strong>
                <small>Built with care</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>✦</span>
              <div>
                <strong>Responsive</strong>
                <small>Every screen</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about section">
          <div className="section-heading">
            <p className="section-label">01 — ABOUT ME</p>
            <h2>
              Turning ideas into
              <br />
              <span>digital experiences.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="large-text">
                I'm a Frontend Developer who enjoys turning designs and ideas
                into functional, beautiful and responsive websites.
              </p>

              <p>
                I focus on writing clean code, creating intuitive interfaces
                and making sure websites work smoothly across different
                devices.
              </p>

              <p>
                I'm continuously learning and improving my skills by building
                real-world projects and experimenting with new technologies.
              </p>

              <a href="#contact" className="text-link">
                Let's work together <span>→</span>
              </a>
            </div>

            <div className="about-stats">
              <div className="stat">
                <strong>02</strong>
                <span>Projects<br />Built</span>
              </div>

              <div className="stat">
                <strong>04+</strong>
                <span>Core<br />Technologies</span>
              </div>

              <div className="stat">
                <strong>100%</strong>
                <span>Passion for<br />Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="skills section">
          <div className="section-heading centered">
            <p className="section-label">02 — MY SKILLS</p>
            <h2>
              Tools I use to
              <br />
              <span>build things.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-top">
                  <span className="skill-number">
                    0{index + 1}
                  </span>
                  <h3>{skill.name}</h3>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: skill.level }}
                  ></div>
                </div>

                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="projects section">
          <div className="projects-header">
            <div className="section-heading">
              <p className="section-label">03 — SELECTED WORK</p>
              <h2>
                A few things
                <br />
                <span>I've built.</span>
              </h2>
            </div>

            <p className="projects-intro">
              Here are some of the projects I've created while learning and
              improving my frontend development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <div className="project-number">0{index + 1}</div>

                  <div className="browser">
                    <div className="browser-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-content">
                      <div className="mock-title"></div>
                      <div className="mock-line"></div>
                      <div className="mock-line short"></div>

                      <div className="mock-boxes">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <p className="project-type">WEB DEVELOPMENT</p>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.demo}>
                      Live Demo <span>↗</span>
                    </a>

                    <a href={project.github}>
                      GitHub <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact section">
          <div className="contact-box">
            <div className="contact-content">
              <p className="section-label">04 — CONTACT</p>

              <h2>
                Have a project
                <br />
                <span>in mind?</span>
              </h2>

              <p>
                Whether you have a project idea, a job opportunity, or just
                want to say hello, feel free to reach out.
              </p>

              <a
                href="mailto:your@email.com"
                className="primary-button"
              >
                Say Hello <span>↗</span>
              </a>
            </div>

            <div className="contact-decoration">
              <div className="circle circle-large"></div>
              <div className="circle circle-medium"></div>
              <div className="circle circle-small"></div>
              <span>✦</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <a href="#home" className="logo">
            R<span>.</span>S
          </a>
          <p>© 2026 Rania Sheikh. All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;