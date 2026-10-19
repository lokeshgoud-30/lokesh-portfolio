
import { useCallback, useEffect, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "The Crochee",
    description:
      "A full-stack e-commerce platform for handmade crochet products, featuring product collections, shopping cart, checkout, custom orders, and an admin dashboard.",
    image: "/assets/images/projects/the-crochee.png",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
    ],
    linkType: "Live Website",
    link: "https://the-crochee-frontend.onrender.com/",
    video: "/assets/videos/The-Crochee.mp4",
  },
  {
    title: "Next-Gen Student Ecosystem",
    description:
      "A student management platform bringing academic records, attendance, performance analytics, administrative tools, and student services into one interface.",
    image: "/assets/images/projects/next-gen-student-ecosystem.png",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    linkType: "GitHub",
    link: "https://github.com/lokeshgoud-30/next-gen-student-ecosystem",
    video: "/assets/videos/next-gen-student-ecosystem.mp4",
  },
  {
    title: "IPL Insights Dashboard",
    description:
      "An interactive Power BI dashboard exploring IPL statistics, team standings, player performance, and match trends across seasons.",
    image: "/assets/images/projects/ipl-insights.png",
    technologies: ["Power BI", "DAX", "Power Query", "Excel"],
    linkType: "GitHub",
    link: "https://github.com/lokeshgoud-30/ipl_insights",
    video: "/assets/videos/ipl-insights.mp4",
  },
  {
    title: "Netflix Data Analysis",
    description:
      "A Python data analysis project exploring Netflix movies and TV shows, content distribution, country-wise trends, genres, and release patterns.",
    image: "/assets/images/projects/netflix-data-analysis.png",
    technologies: [
      "Python",
      "pandas",
      "Data Analysis",
      "Data Visualization",
    ],
    linkType: "GitHub",
    link: "https://github.com/lokeshgoud-30/Netflix-Big-Data-Analysist",
    video: "",
  },
];

function ProjectCard({ project, index, onPlayVideo }) {
  return (
    <article
      className="project-card"
      style={{ "--project-index": index }}
    >
      <div className="project-image-wrapper">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />

        {project.video && (
          <button
            type="button"
            className="project-video-link"
            onClick={() => onPlayVideo(project)}
            aria-label={`Watch ${project.title} demonstration`}
          >
            <span className="project-play-icon" aria-hidden="true">
              ▶
            </span>
            Watch Demo
          </button>
        )}
      </div>

      <div className="project-card-content">
        <span className="project-number">
          PROJECT {String(index + 1).padStart(2, "0")}
        </span>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tech-list">
          {project.technologies.map((technology) => (
            <span className="project-tech" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <a
          className="project-action"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.linkType}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function VideoModal({ project, onClose }) {
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return undefined;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      className="project-video-modal"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-video-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} video demonstration`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-video-header">
          <h3>{project.title} — Demo</h3>

          <button
            type="button"
            className="project-video-close"
            onClick={onClose}
            aria-label="Close video"
          >
            ✕
          </button>
        </div>

        <video
          key={project.video}
          className="project-video-player"
          src={project.video}
          controls
          autoPlay
          playsInline
          preload="metadata"
        >
          Your browser does not support video playback.
        </video>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <header className="projects-heading">
        <p className="projects-eyebrow">SELECTED WORK</p>

        <h2>
          Projects That <span>Define My Journey</span>
        </h2>

        <p className="projects-heading-description">
          A closer look at the applications I have built and the
          insights I have uncovered through data.
        </p>
      </header>

      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            key={project.title}
            onPlayVideo={setActiveVideo}
          />
        ))}
      </div>

      <VideoModal
        project={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
