
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-navbar">
        <a href="#home" className="site-logo" onClick={closeMenu}>
          Lokesh<span>G.</span>
        </a>

        <button
          type="button"
          className="nav-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        <ul className={`site-nav-menu ${menuOpen ? "menu-open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>

        <a
          href="/assets/resume/Lokesh_Gounipalli.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="site-resume-btn"
        >
          Resume <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
