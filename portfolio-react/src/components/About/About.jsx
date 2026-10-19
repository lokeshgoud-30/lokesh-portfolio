import { useState } from "react";
import {
  Laptop,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  ChartNoAxesColumn,
} from "lucide-react";
import "./About.css";

const skillGroups = [
  {
    title: "Programming",
    description: "Writing code and working with data",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python/3776AB",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/solid/database.svg",
        className: "sql-logo",
      },
    ],
  },
  {
    title: "Full Stack Development",
    description: "Building interactive web applications",
    skills: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/00D8FF",
      },
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express/FFFFFF",
      },
      {
        name: "HTML5",
        icon: "https://cdn.simpleicons.org/html5/E34F26",
      },
      {
        name: "CSS3",
        icon: "https://cdn.simpleicons.org/css3/1572B6",
      },
      {
        name: "REST APIs",
        symbol: "API",
      },
    ],
  },
  {
    title: "Data Analytics",
    description: "Transforming data into useful insights",
    skills: [
      {
        name: "Power BI",
        icon: "https://cdn.simpleicons.org/powerbi/F2C811",
      },
      {
        name: "Excel",
        icon: "https://cdn.simpleicons.org/microsoftexcel/217346",
      },
      {
        name: "DAX",
        symbol: "DAX",
      },
      {
        name: "Power Query",
        symbol: "PQ",
      },
    ],
  },
  {
    title: "Developer Tools",
    description: "Testing, version control, and development",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git/F05032",
      },
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/FFFFFF",
      },
      {
        name: "Postman",
        icon: "https://cdn.simpleicons.org/postman/FF6C37",
      },
      {
        name: "VS Code",
        icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      },
    ],
  },
];

const education = [
  {
    period: "2022 – 2026",
    title: "B.Tech",
    field: "Electronics & Instrumentation Engineering",
    institution: "Mohan Babu University, Tirupati",
    result: "CGPA: 8.7",
  },
  {
    period: "2020 – 2022",
    title: "Intermediate",
    field: "Higher Secondary Education",
    institution: "C.N. Raju Junior College, Rayachoty",
    result: "CGPA: 7.1",
  },
  {
    period: "2019 – 2020",
    title: "SSC",
    field: "Secondary School Education",
    institution: "Raju High School, Rayachoty",
    result: "CGPA: 10.0",
  },
];

const experience = [
  "Developing full-stack web applications using React.js, JavaScript, Node.js, Express.js, and SQL.",
  "Designing and integrating REST APIs and working with databases for application development.",
  "Performing API testing and validation using Postman.",
  "Using Python, SQL, Excel, and Power BI for data analysis and visualization.",
  "Practicing software testing, debugging, and problem-solving through hands-on projects.",
];

const skillFallbacks = {
  Python: "Py",
  JavaScript: "JS",
  React: "⚛",
  "Node.js": "JS",
  "Express.js": "EX",
  HTML5: "5",
  CSS3: "CSS",
  "Power BI": "BI",
  Excel: "XL",
  Git: "Git",
  GitHub: "GH",
  Postman: "P",
  "VS Code": "VS",
};

function SkillCard({ group }) {
  const [failedIcons, setFailedIcons] = useState([]);

  return (
    <article className="skill-card">
      <h4>{group.title}</h4>
      <p className="skill-card-description">{group.description}</p>

      <div className="skill-logo-grid">
        {group.skills.map((skill) => {
          const iconFailed = failedIcons.includes(skill.name);

          return (
            <div className="skill-logo-item" key={skill.name}>
              {skill.icon && !iconFailed ? (
                <img
                  className={`skill-logo ${skill.className || ""}`}
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  loading="eager"
                  onError={() => {
                    setFailedIcons((previous) =>
                      previous.includes(skill.name)
                        ? previous
                        : [...previous, skill.name],
                    );
                  }}
                />
              ) : (
                <span
                  className={`skill-symbol ${skill.className || ""}`}
                  role="img"
                  aria-label={`${skill.name} icon`}
                >
                  {skill.symbol ||
                    skillFallbacks[skill.name] ||
                    skill.name.slice(0, 2).toUpperCase()}
                </span>
              )}

              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </article>
  );
}

function EducationTimeline() {
  return (
    <div className="about-education-panel">
      {education.map((item) => (
        <article className="about-education-item" key={item.title}>
          <span className="about-timeline-dot" aria-hidden="true" />
          <span className="about-timeline-period">{item.period}</span>
          <h4>{item.title}</h4>
          <p>{item.field}</p>
          <p>{item.institution}</p>
          <span className="about-timeline-result">{item.result}</span>
        </article>
      ))}
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="about-experience-panel">
      <p className="about-panel-note">
        Independent work and hands-on project development
      </p>

      <article className="about-experience-item">
        <span className="about-timeline-dot" aria-hidden="true" />

        <span className="about-timeline-period">
          October 2025 – Present
        </span>

        <h4>Independent Full Stack Developer &amp; Data Analyst</h4>

        <p className="about-experience-type">Self-directed projects</p>

        <p className="about-experience-description">
          Building practical software applications and data analytics projects
          while continuously strengthening technical and problem-solving skills.
        </p>

        <ul className="about-experience-list">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <div className="about-layout">
        <div className="about-left">
          <header className="about-heading">
            <p className="about-eyebrow">GET TO KNOW ME</p>

            <h2>
              About <span>Me</span>
            </h2>

            <p className="about-heading-description">
              My background, technical skills, education, and development
              journey.
            </p>
          </header>

          <div className="about-introduction">
            <h3>Who am I?</h3>

            <p>
              I&apos;m Lokesh Gounipalli, an Electronics and Instrumentation
              Engineering graduate from Mohan Babu University, passionate
              about software development and data analytics. I enjoy building
              practical applications and exploring how technology can solve
              real-world problems.
            </p>

            <p>
              Through hands-on projects, I&apos;ve been developing my skills
              in Python, SQL, Power BI, and full-stack web development.
              I&apos;m looking forward to applying these skills in a
              professional environment and continuing to learn.
            </p>

            <div className="about-highlights">
              <article className="about-highlight">
                <Code2 aria-hidden="true" />
                <div>
                  <h4>Development</h4>
                  <p>Building practical applications</p>
                </div>
              </article>

              <article className="about-highlight">
                <ChartNoAxesColumn aria-hidden="true" />
                <div>
                  <h4>Data Analytics</h4>
                  <p>Finding insights in data</p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="about-details">
          <div
            className="about-tabs"
            role="tablist"
            aria-label="About details"
          >
            <button
              id="about-tab-skills"
              type="button"
              role="tab"
              aria-controls="about-panel-skills"
              aria-selected={activeTab === "skills"}
              className={`about-tab ${
                activeTab === "skills" ? "active" : ""
              }`}
              onClick={() => setActiveTab("skills")}
            >
              <Laptop aria-hidden="true" />
              Skills
            </button>

            <button
              id="about-tab-education"
              type="button"
              role="tab"
              aria-controls="about-panel-education"
              aria-selected={activeTab === "education"}
              className={`about-tab ${
                activeTab === "education" ? "active" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              <GraduationCap aria-hidden="true" />
              Education
            </button>

            <button
              id="about-tab-experience"
              type="button"
              role="tab"
              aria-controls="about-panel-experience"
              aria-selected={activeTab === "experience"}
              className={`about-tab ${
                activeTab === "experience" ? "active" : ""
              }`}
              onClick={() => setActiveTab("experience")}
            >
              <BriefcaseBusiness aria-hidden="true" />
              Experience
            </button>
          </div>

          {activeTab === "skills" && (
            <div
              id="about-panel-skills"
              className="about-tab-content"
              role="tabpanel"
              aria-labelledby="about-tab-skills"
            >
              <div className="about-panel-heading">
                <h3>Technical Skills</h3>
                <p>Technologies I use to build and analyze.</p>
              </div>

              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <SkillCard group={group} key={group.title} />
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div
              id="about-panel-education"
              className="about-tab-content"
              role="tabpanel"
              aria-labelledby="about-tab-education"
            >
              <EducationTimeline />
            </div>
          )}

          {activeTab === "experience" && (
            <div
              id="about-panel-experience"
              className="about-tab-content"
              role="tabpanel"
              aria-labelledby="about-tab-experience"
            >
              <ExperienceTimeline />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}