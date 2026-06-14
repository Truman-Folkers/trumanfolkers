import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Code2, Mail, Sparkles } from "lucide-react";
import portrait from "./assets/ChatGPT Image Jun 7, 2026, 06_28_52 PM (1).PNG";
import cyai from "./assets/cyai2.png";
import own from "./assets/Ownaes.png";
import trueyou from "./assets/truyou.png";
import "./styles.css";

const projects = [
  {
    title: "CyAI",
    tag: "",
    type: "Full-stack app",
    copy: "An Chrome extension AI agent for ISU student Canvas",
    gradient: "orange",
    image: cyai,
    link: "https://chromewebstore.google.com/detail/cyai/ohikkdmdedaijlbkelldeengpckdmakd?hl=en&authuser=0",
  },
  {
    title: "Own Aesthetics",
    tag: "",
    type: "Developer tool",
    copy: "A polished full-stack medspa website",
    gradient: "green",
    image: own,
    link: "https://ownaesthetics.com",
  },
  {
    title: "TrueYou",
    tag: "",
    type: "Interface system",
    copy: "A mental health mobile app for ISU students using React Native",
    gradient: "blue",
    image: trueyou,
    link: "https://youtu.be/3RQQMXqWMxI",
  },
];

const allProjects = [
  {
    name: "CyAI",
    category: "Chrome extension",
    stack: "React, Node.js, AI tooling",
    year: "2026",
    status: "Live",
    link: "https://chromewebstore.google.com/detail/cyai/ohikkdmdedaijlbkelldeengpckdmakd?hl=en&authuser=0",
  },
  {
    name: "Own Aesthetics",
    category: "Full-stack website",
    stack: "React, APIs, responsive UI",
    year: "2025",
    status: "Live",
    link: "https://ownaesthetics.com",
  },
  {
    name: "TrueYou",
    category: "Mobile app",
    stack: "React Native, product design",
    year: "2026",
    status: "Demo",
    link: "https://youtu.be/3RQQMXqWMxI",
  },
  {
    name: "Portfolio Website",
    category: "Personal site",
    stack: "React, Vite, CSS",
    year: "2026",
    status: "Active",
    link: "/",
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
  const isProjectsPage = window.location.pathname === "/projects";

  if (isProjectsPage) {
    return (
      <main>
        <Header currentPage="projects" />
        <ProjectIndex />
      </main>
    );
  }

  return (
    <main>
      <Header currentPage="home" />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

function Header({ currentPage }) {
  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Primary navigation">
        <a className={currentPage === "home" ? "active" : ""} href="/">
          Home
        </a>
        <a
          className={currentPage === "projects" ? "active" : ""}
          href="/projects"
        >
          Projects
        </a>
        <a href="/#about">About</a>
      </nav>
      <a className="wordmark" href="/" aria-label="Truman Folkers home">
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
            onClick={() => window.open(project.link, "_blank")}
            key={project.title}
          >
            <div className="project-top">
              <span>{project.type}</span>
              <Code2 size={24} />
            </div>
            <div className="project-shot">
              <img src={project.image} alt={`${project.title} preview`} />
            </div>
            <div className="project-meta">
              <span>{project.tag}</span>
              <ArrowUpRight size={24} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.copy}</p>
          </article>
        ))}
      </div>
      <a className="pill-button project-index-link" href="/projects">
        full project table <ArrowUpRight size={20} />
      </a>
    </section>
  );
}
//asdfasdf
function ProjectIndex() {
  return (
    <section
      className="project-index-page"
      aria-labelledby="project-index-title"
    >
      <div className="project-index-hero">
        <p className="kicker">My Builds</p>
        <h1 id="project-index-title">Project Portfolio</h1>
        <p>
          My personal & business projects. I'll be adding to this over time, so
          be sure to check back for updates!
        </p>
      </div>

      <div className="project-table-wrap">
        <table className="project-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Type</th>
              <th>Stack</th>
              <th>Year</th>
              <th>Status</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {allProjects.map((project) => (
              <tr key={project.name}>
                <td data-label="Project">
                  <strong>{project.name}</strong>
                </td>
                <td data-label="Type">{project.category}</td>
                <td data-label="Stack">{project.stack}</td>
                <td data-label="Year">{project.year}</td>
                <td data-label="Status">
                  <span className="status-pill">{project.status}</span>
                </td>
                <td data-label="Link">
                  <a
                    href={project.link}
                    target={project.link.startsWith("/") ? "_self" : "_blank"}
                    rel="noreferrer"
                  >
                    open <ArrowUpRight size={18} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
