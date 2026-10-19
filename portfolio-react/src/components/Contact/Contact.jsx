
import "./Contact.css";

const contactLinks = [
  {
    name: "Gmail",
    detail: "lokeshgoud302004@gmail.com",
    href: "mailto:lokeshgoud302004@gmail.com",
    icon: "gmail",
    label: "Email me",
  },
  {
    name: "GitHub",
    detail: "Explore my repositories",
    href: "https://github.com/lokeshgoud-30",
    icon: "github",
    label: "View GitHub profile",
  },
  {
    name: "LinkedIn",
    detail: "Let's connect professionally",
    href: "https://www.linkedin.com/in/lokesh-gounipalli/",
    icon: "linkedin",
    label: "Connect on LinkedIn",
  },
];

function SocialIcon({ type }) {
  if (type === "gmail") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M5 12.5 10 16v20H5a3 3 0 0 1-3-3V15.5a3 3 0 0 1 3-3Z"
        />
        <path
          fill="#34A853"
          d="M38 16 43 12.5a3 3 0 0 1 3 3V33a3 3 0 0 1-3 3h-5Z"
        />
        <path
          fill="#EA4335"
          d="M5 12.5 24 27l19-14.5a3 3 0 0 0-3.7-4.7L24 19 8.7 7.8A3 3 0 0 0 5 12.5Z"
        />
        <path
          fill="#C5221F"
          d="M38 16v20h5a3 3 0 0 0 3-3V15.5a3 3 0 0 0-3-3Z"
        />
        <path
          fill="#FBBC04"
          d="M5 12.5 10 16v20H5a3 3 0 0 1-3-3V15.5a3 3 0 0 1 3-3Z"
        />
        <path
          fill="#C5221F"
          d="M10 16v20H5a3 3 0 0 1-3-3V15.5a3 3 0 0 1 3-3Z"
        />
        <path
          fill="#4285F4"
          d="M38 16 43 12.5a3 3 0 0 1 3 3V33a3 3 0 0 1-3 3h-5Z"
        />
        <path
          fill="#34A853"
          d="M24 27 10 16v20h28V16Z"
          opacity="0"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3ZM6.5 7.77a1.75 1.75 0 1 1 .02-3.5 1.75 1.75 0 0 1-.02 3.5ZM19 18h-3v-4.38c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04A3.16 3.16 0 0 1 15.6 8.8c3.03 0 3.4 1.99 3.4 4.58Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M8 7h9v9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-panel">
        <header className="contact-topline">
          <p>HAVE AN IDEA? LET'S BUILD IT.</p>

          <span className="contact-availability">
            <span className="availability-dot" />
            Open to new challenges
          </span>
        </header>

        <div className="contact-main">
          <div className="contact-intro">
            <div className="contact-profile-row">
              <div className="contact-avatar">
                <img
                  src="/assets/images/Contact-image.png"
                  alt="Lokesh Gounipalli"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="contact-avatar-fallback">LG</span>
              </div>

              <span className="contact-connect-status">
                <span className="availability-dot" />
                Let's connect
              </span>
            </div>

            <p className="contact-eyebrow">GET IN TOUCH</p>

            <h2>
              Have an idea?
              <br />
              Let's make it <span>real.</span>
            </h2>

            <p className="contact-description">
              From building full-stack applications to creating insightful
              dashboards, I love developing solutions that are useful,
              thoughtful, and built to work.
            </p>
          </div>

          <div className="contact-social">
            <p className="contact-eyebrow">FIND ME ON</p>

            <div className="contact-social-links">
              {contactLinks.map((item) => (
                <a
                  className="contact-social-link"
                  href={item.href}
                  key={item.name}
                  target={item.icon === "gmail" ? undefined : "_blank"}
                  rel={
                    item.icon === "gmail"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={item.label}
                  title={item.name}
                >
                  <SocialIcon type={item.icon} />
                </a>
              ))}
            </div>

            <p className="contact-social-note">
              Have a project in mind? My inbox is open.
            </p>

            <a
              className="contact-cta"
              href="mailto:lokeshgoud302004@gmail.com?subject=Portfolio%20Enquiry"
            >
              <span>Have a project in mind? Let's talk</span>
              <ArrowIcon />
            </a>

            <button
              className="contact-email-copy"
              type="button"
              onClick={() => {
                navigator.clipboard
                  .writeText("lokeshgoud302004@gmail.com")
                  .then(() => {
                    const button = document.querySelector(
                      ".contact-email-copy"
                    );

                    if (button) {
                      button.textContent = "Email copied!";
                      window.setTimeout(() => {
                        button.textContent = "Copy email address";
                      }, 1800);
                    }
                  })
                  .catch(() => {
                    window.location.href =
                      "mailto:lokeshgoud302004@gmail.com";
                  });
              }}
            >
              Copy email address
            </button>
          </div>
        </div>

        <footer className="contact-footer">
          <span>LOKESH GOUNIPALLI</span>
          <span>BUILDING IDEAS INTO REALITY.</span>
        </footer>
      </div>
    </section>
  );
}
