
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* Logo */}
      <a href="#home" className="logo" onClick={closeMenu}>
        R<span>.</span>S
      </a>

      {/* Navigation Links */}
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      {/* Let's Talk */}
      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;
