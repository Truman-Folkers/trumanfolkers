import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Code2, Mail, Sparkles } from "lucide-react";
import portrait from "./assets/ChatGPT Image Jun 7, 2026, 06_28_52 PM (1).PNG";
import cyai from "./assets/cyai2.png";
import own from "./assets/Ownaes.png";
import "./styles.css";

const projects = [
  {
    title: "CyAI",
    tag: "#recentbuild",
    type: "Full-stack app",
    copy: "An Chrome extension AI agent for ISU student Canvas",
    gradient: "orange",
    link: "https://chromewebstore.google.com/detail/cyai/ohikkdmdedaijlbkelldeengpckdmakd?hl=en&authuser=0",
  },
  {
    title: "Own Aesthetics",
    tag: "#shipit",
    type: "Developer tool",
    copy: "A polished full-stack medspa website",
    gradient: "green",
    link: "https://ownaesthetics.com",
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
  "Node.js",
  "Python",
  "APIs",
  "mySQL",
  "AWS",
  "Java",
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
          <a
            className="pill-button"
            href="/Truman Folkers Resume [Fall 2026].pdf"
            download="Truman Folkers Resume [Fall 2026].pdf"
          >
            resume <ArrowUpRight size={20} />
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
            className={`project-card ${project.gradient}`}
            style={{
              cursor: "pointer",
            }}
            //backgroundImage: `url(${project.image})`,
            onClick={() => window.open(project.link, "_blank")}
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
        <h2 id="about-title">Coding for the Glory of Christ </h2>
      </div>
      <div className="about-copy">
        <p>
          Hi! I’m Truman Folkers, a software engineer from Des Moines, Iowa,
          currently in my third year of college. I specialize in full-stack
          development, building polished, responsive frontends backed by clean
          backend systems and data pipelines. I’m passionate about solving
          real-world problems through clean, scalable software, and I’m always
          eager to learn more!
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
      <p className="section-label">
        open to internships, co-ops and consulting
      </p>
      <h2 id="contact-title">Let's connect!</h2>
      <a className="pill-button dark" href="mailto:truman.folkers91@gmail.com">
        <Mail size={20} />
      </a>
    </section>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
