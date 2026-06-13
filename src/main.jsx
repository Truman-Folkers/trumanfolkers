import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Code2, Mail, Sparkles } from "lucide-react";
import portrait from "./assets/ChatGPT Image Jun 7, 2026, 06_28_52 PM (1).PNG";
import "./styles.css";

const projects = [
  {
    title: "CampusLink",
    tag: "#recentbuild",
    type: "Full-stack app",
    copy: "A student org platform with events, dashboards, and clean admin workflows.",
    gradient: "orange",
    image: "https://trumanfolkers.com/assets/campuslink.png",
  },
  {
    title: "DeployDesk",
    tag: "#shipit",
    type: "Developer tool",
    copy: "A polished release tracker that turns commits, checks, and notes into one calm deploy view.",
    gradient: "green",
    image: "https://trumanfolkers.com/assets/campuslink.png",
  },
  {
    title: "SignalBoard",
    tag: "#frontend",
    type: "Interface system",
    copy: "A responsive analytics UI with reusable cards, filters, and data states that feel finished.",
    gradient: "blue",
    image: "https://trumanfolkers.com/assets/campuslink.png",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Node",
  "Python",
  "APIs",
  "Databases",
  "UI Design",
  "Testing",
];

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Primary navigation">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
      </nav>
      <a className="wordmark" href="#home" aria-label="Truman Folkers home">
        <i>Truman</i>Folkers<span></span>
      </a>
      <div className="social-row" aria-label="Social links">
        <a
          href="https://github.com/Truman-Folkers"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/truman-folkers/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a href="mailto:truman.folkers91@gmail.com">mail</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="kicker">Software engineer</p>
        <h1 id="hero-title">
          Truman <span className="circled">Folkers.</span>
        </h1>
        <div className="hero-actions">
          <a className="pill-button" href="#portfolio">
            portfolio <ArrowUpRight size={20} />
          </a>
          <a className="pill-button" href="#about">
            about me <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      <div className="portrait-wrap">
        <img
          src={portrait}
          alt="Editorial portrait-style image of a software engineer in a warm studio setting."
        />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      className="projects"
      id="portfolio"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title">Recent Projects</h2>
      <div className="project-stage">
        {projects.map((project, index) => (
          <article
            className={"project-card"}
            style={{ background: `url(${project.image})` }}
            key={project.title}
          >
            <div className="project-top">
              <span>{project.type}</span>
              <Code2 size={24} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div>
        <p className="section-label">the message behind the build</p>
        <h2 id="about-title">
          Clean systems. Human screens. Work that actually ships.
        </h2>
      </div>
      <div className="about-copy">
        <p>
          Truman Folkers is a software engineer focused on building web
          experiences that feel useful, expressive, and easy to trust. The work
          blends product thinking, front-end craft, and full-stack
          follow-through.
        </p>
        <div className="skill-cloud" aria-label="Technical skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <p className="section-label">open to internships, roles, freelance</p>
      <h2 id="contact-title">
        Have a build that needs taste and technical range?
      </h2>
      <a className="pill-button dark" href="mailto:hello@trulee.dev">
        let&apos;s talk <Mail size={20} />
      </a>
    </section>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
