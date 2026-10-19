
import "./Hero.css";

const skills = [
  { name: "Python", icon: "fa-brands fa-python", className: "python" },
  { name: "SQL", icon: "fa-solid fa-database", className: "sql" },
  { name: "React", icon: "fa-brands fa-react", className: "react" },
  { name: "Node.js", icon: "fa-brands fa-node-js", className: "node" },
  { name: "Power BI", icon: "fa-solid fa-chart-column", className: "powerbi" },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">Lokesh Gounipalli</h1>

        <p className="hero-subtitle">
          SOFTWARE DEVELOPER <span>·</span> DATA ANALYST
        </p>

        <h2 className="hero-title">
          From raw information to
          <span> real-world solutions.</span>
        </h2>

        <p className="hero-description">
          I develop software that connects people, processes, and data,
          turning technical requirements into practical applications and
          information into actionable insights.
        </p>

        <div className="hero-skills">
          {skills.map((skill) => (
            <div
              className={`hero-skill hero-skill-${skill.className}`}
              key={skill.name}
            >
              <i className={skill.icon} aria-hidden="true"></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            View Projects
          </a>

          <a
            href="/assets/resume/Lokesh_Gounipalli.pdf"
            download="Lokesh_Gounipalli.pdf"
            className="hero-btn hero-btn-secondary"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/lokeshgoud-30"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/lokesh-gounipalli/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="mailto:lokeshgoud302004@gmail.com"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-profile-card">
          <img
            src="/assets/images/profile.png"
            alt="Lokesh Gounipalli"
            className="hero-profile-image"
          />

          <div className="hero-status">
            <span className="hero-status-dot"></span>
            <span>OPEN TO WORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
