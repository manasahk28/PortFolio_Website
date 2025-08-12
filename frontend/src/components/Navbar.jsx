import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
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

  const handleClick = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <header className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo" onClick={() => handleClick('hero')}>
              Manasa
            </div>


            <div className={`navbar-menu${menuOpen ? ' active' : ''}`}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={`nav-link ${active === link.id ? 'active' : ''}`}
                  onClick={() => handleClick(link.id)}
                >
                  {link.label}
                </button>
              ))}
              {/* Theme toggle for mobile */}
              <button className="theme-toggle theme-toggle-mobile" onClick={toggleTheme}>
                {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
              </button>
            </div>

            <div className="navbar-actions">
              <button className="theme-toggle theme-toggle-desktop" onClick={toggleTheme}>
                {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
              </button>
              <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars size={24} />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay for blur effect */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
