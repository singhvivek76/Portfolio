import React, { useEffect } from 'react'
import { useState } from 'react'
import {FiMenu, FiMoon, FiSun, FiX} from 'react-icons/fi'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import LogoImage from '../../assets/Logo.jpeg'

const Navbar = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    } else {
      // fallback: set active anyway so clicked item highlights
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  }

  const menuItems = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    {id: "education", label: "Education"},
    {id: "contact", label: "Contact"},
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
      isScrolled ? 'bg-[var(--navbar-bg)] backdrop-blur-md shadow-[var(--shadow-soft)]' : 'bg-transparent'
    }`}>
        <div className='py-5 flex justify-between items-center text-[var(--color-text)]'>
          <div className='text-lg font-bold cursor-pointer'>

            <img src={LogoImage} alt='Logo'
               className='w-15 h-15 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
            
          </div>
          
          <ul className='hidden md:flex space-x-8 text-[var(--color-text-muted)]'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? 'text-[#8245ec]' : ''
              }`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

            <div className='flex items-center gap-3'>
              <button
                type="button"
                onClick={onToggleTheme}
                className='flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] text-[var(--color-text)] transition hover:border-[#8245ec] hover:text-[#8245ec]'
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <FiSun className='text-xl' /> : <FiMoon className='text-xl' />}
              </button>

            <div className='md:hidden'>
              {
                isOpen ? (
                  <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                    onClick={() => setIsOpen(false)}
                  />
                ) : (
                  <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                    onClick={() => setIsOpen(true)}
                  />
                )
              }
            </div>
            </div>

        </div>

        {isOpen && (
          <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] backdrop-filter backdrop-blur-lg z-50 shadow-[var(--shadow-soft)] md:hidden'>
            <ul className='flex flex-col items-center space-y-4 py-4 text-[var(--color-text-muted)]'>
              {menuItems.map((item) => (
                <li key={item.id} className={`cursor-pointer hover:text-[var(--color-text)]
                  ${activeSection === item.id ? 'text-[#8245ec]' : ""  
                }`}>
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}

              <div className='flex space-x-4'>
                <a href="https://github.com/singhvivek76"
                  target="_blank" rel="noopener noreferrer"
                  className='text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                >
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/toviveksinghh76/"
                  target="_blank" rel="noopener noreferrer"
                  className='text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                >
                  <FaLinkedin size={24} />
                </a>
                <a href="https://leetcode.com/u/tovivek/"
                  target="_blank" rel="noopener noreferrer"
                  className='text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                >
                  <SiLeetcode size={24} />
                </a>
              </div> 

            </ul>
          </div>
        )}

    </nav>
  );
};

export default Navbar;
