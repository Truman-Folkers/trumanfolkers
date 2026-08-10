import React, { useEffect } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Code2, Mail, Sparkles } from "lucide-react";
import portrait from "./assets/ChatGPT Image Jun 7, 2026, 06_28_52 PM (1).PNG";
import cyai from "./assets/cyai2.png";
import own from "./assets/Ownaes.png";
import trueyou from "./assets/truyou.png";
import "./styles.css";
import { createStatus, fetchStatuses, updateStatus } from "./api/statuses";
import { format, subDays, startOfToday } from "date-fns";
import { Tooltip } from "react-tooltip";

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

const radarSkills = [
  { label: "C", value: 6.6 },
  { label: "JavaScript", value: 8.2 },
  { label: "TypeScript", value: 8.5 },
  { label: "Java", value: 8.4 },
  { label: "Python", value: 6.0 },
  { label: "C#", value: 3.6 },
  { label: "SQL", value: 5.3 },
  { label: "HTML/CSS", value: 9.2 },
];

const maxSkillScore = 10;

function App() {
  const [isProjectsPage, setIsProjectsPage] = useState(false);
  const [isStatusPage, setIsStatusPage] = useState(false);

  if (isProjectsPage) {
    return (
      <main>
        <Header
          currentPage="projects"
          setIsProjectsPage={setIsProjectsPage}
          setIsStatusPage={setIsStatusPage}
        />
        <ProjectIndex setIsProjectsPage={setIsProjectsPage} />
      </main>
    );
  }

  if (isStatusPage) {
    return (
      <main>
        <Header
          currentPage="status"
          setIsProjectsPage={setIsProjectsPage}
          setIsStatusPage={setIsStatusPage}
        />
        <StatusPage setIsStatusPage={setIsStatusPage} />
      </main>
    );
  }

  return (
    <main>
      <Header
        currentPage="home"
        setIsProjectsPage={setIsProjectsPage}
        setIsStatusPage={setIsStatusPage}
      />
      <Hero />
      <Projects setIsProjectsPage={setIsProjectsPage} />
      <About />
      <Contact />
    </main>
  );
}

function Header({ currentPage, setIsProjectsPage, setIsStatusPage }) {
  return (
    <header className="site-header">
      <nav className="main-nav" aria-label="Primary navigation">
        <a className={currentPage === "home" ? "active" : ""} href="/">
          Home
        </a>
        <a
          className={currentPage === "projects" ? "active" : ""}
          onClick={() => {
            setIsProjectsPage(true);
            setIsStatusPage(false);
          }}
          style={{ cursor: "pointer" }}
        >
          Projects
        </a>
        <a
          className={currentPage === "status" ? "active" : ""}
          onClick={() => {
            setIsStatusPage(true);
            setIsProjectsPage(false);
          }}
          style={{ cursor: "pointer" }}
        >
          Status
        </a>
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

function Projects({ setIsProjectsPage }) {
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
      <a
        className="pill-button project-index-link"
        onClick={() => {
          setIsProjectsPage(true);
        }}
        style={{ cursor: "pointer" }}
      >
        full project table <ArrowUpRight size={20} />
      </a>
    </section>
  );
}
//aasdfsdfasdf
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

function StatusPage({ setIsStatusPage }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetchStatuses().then(setStatuses);
  }, []);

  //logic for last 60 days map
  const days = Array.from({ length: 90 }, (_, i) =>
    format(subDays(startOfToday(), 89 - i), "yyyy-MM-dd"),
  );

  //day column jsx code
  const DayColumn = ({ status }) => {
    console.log(status);
    return (
      <span
        data-tooltip-id="status-tooltip"
        data-tooltip-content="Status"
        data-tooltip-place="top"
        className={
          status === 1
            ? "day-column-1"
            : status === 2
              ? "day-column-2"
              : "day-column-3"
        }
      >
        {" "}
        <Tooltip id="status-tooltip" />
      </span>
    );
  };

  const groups = statuses.reduce((acc, status) => {
    (acc[status.name] ??= []).push(status);
    return acc;
  }, {});

  return (
    <section className="status-page" aria-labelledby="status-page-title">
      <div className="status-hero">
        <p className="kicker">Daily Tracking</p>
        <h1 id="status-page-title">Status</h1>
        <p>Tracking my daily habits and consistency over the last 90 days.</p>
      </div>

      <div className="status-grid">
        {Object.entries(groups).map(([name, rows]) => {
          const byDate = new Map(
            rows.map((r) => [
              format(new Date(r.created_at), "yyyy-MM-dd"),
              r.status,
            ]),
          );
          const series = days.map((d) => byDate.get(d) ?? null);
          const uptime = series.filter((v) => v === 1).length / days.length;

          return (
            <div className="status" key={name}>
              <span className="status-title">{name}</span>
              <div className="status-tracker">
                {series.map((v, i) => (
                  <DayColumn key={i} status={v} />
                ))}
              </div>
              <div className="uptime-tracker">
                <span>90 days ago</span>
                <span className="uptime-tracker-line" />
                <span>{(uptime * 100).toFixed(0)}% uptime</span>
                <span className="uptime-tracker-line" />
                <span>Today</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  const size = 430;
  const center = size / 2;
  const maxRadius = 150;
  const levels = [2, 4, 6, 8, 10];
  const viewPadding = 56;

  const getPoint = (value, index, labelOffset = 0) => {
    const angle = (Math.PI * 2 * index) / radarSkills.length - Math.PI / 2;
    const radius = (value / maxSkillScore) * maxRadius + labelOffset;

    return {
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius,
      angle,
    };
  };

  const skillPoints = radarSkills.map((skill, index) => ({
    ...skill,
    ...getPoint(skill.value, index),
    labelPoint: getPoint(maxSkillScore, index, 44),
  }));

  const polygonPoints = skillPoints
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  return (
    <>
      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about-head">
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
      <section className="about-skill-chart">
        <div className="about-radar">
          <div className="radar-card">
            <svg
              className="radar-chart"
              viewBox={`${-viewPadding} 0 ${size + viewPadding * 2} ${size}`}
              role="img"
              aria-label="Radar chart showing Truman Folkers' strongest programming languages and development skills"
            >
              {levels.map((level) => {
                const points = radarSkills
                  .map((_, index) => {
                    const point = getPoint(level, index);
                    return `${point.x},${point.y}`;
                  })
                  .join(" ");

                return (
                  <polygon className="radar-grid" key={level} points={points} />
                );
              })}

              {radarSkills.map((_, index) => {
                const point = getPoint(maxSkillScore, index);

                return (
                  <line
                    className="radar-axis"
                    key={index}
                    x1={center}
                    y1={center}
                    x2={point.x}
                    y2={point.y}
                  />
                );
              })}

              <polygon className="radar-fill" points={polygonPoints} />
              <polyline
                className="radar-stroke"
                points={`${polygonPoints} ${skillPoints[0].x},${skillPoints[0].y}`}
              />

              {skillPoints.map((point) => (
                <circle
                  className="radar-dot"
                  cx={point.x}
                  cy={point.y}
                  key={`${point.label}-dot`}
                  r="5"
                />
              ))}

              {levels.map((level) => {
                const point = getPoint(level, 0);

                return (
                  <text
                    className="radar-number"
                    key={`${level}-label`}
                    x={center + 8}
                    y={point.y + 4}
                  >
                    {level}
                  </text>
                );
              })}

              {skillPoints.map((point) => {
                const labelX = point.labelPoint.x;
                const textAnchor =
                  Math.abs(labelX - center) < 18
                    ? "middle"
                    : labelX < center
                      ? "end"
                      : "start";

                return (
                  <text
                    className="radar-label"
                    dominantBaseline="middle"
                    key={point.label}
                    textAnchor={textAnchor}
                    x={labelX}
                    y={point.labelPoint.y}
                  >
                    {point.label}
                  </text>
                );
              })}
            </svg>

            <div className="radar-legend" aria-label="Skill chart notes">
              <span>Scale: 10 max</span>
              <span>Best: React</span>
              <span>Core: Full-stack</span>
            </div>
          </div>
        </div>
      </section>
    </>
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
