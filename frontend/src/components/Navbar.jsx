import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // add some offset for navbar height

      let current = 'hero';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos) {
          current = link.id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for menu items
  const handleClick = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleClick('hero')}>
          Manasa
        </div>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${active === link.id ? 'active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </nav>
  );
}
