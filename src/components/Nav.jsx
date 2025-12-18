import { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { DiCisco } from "react-icons/di";
import { MdOutlineMenuOpen } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      const rect = homeSection.getBoundingClientRect();
      const isVisible = rect.top <= 0 && rect.bottom >= 0;

      setShowNav(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-slate-900 z-50 shadow-md transition-opacity duration-500 ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 md:px-12">
          {/* Logo */}
          <div className='text-3xl flex items-center gap-2 font-bold'>
            <DiCisco className='text-4xl text-white' />
            <p className='text-secondary dark:text-primary'>Kudhan</p>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-6 text-lg text-gray-300'>
            {navLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className='inline-block py-2 hover:text-secondary font-semibold dark:hover:text-primary transition-colors duration-200'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdOutlineMenuOpen className='text-4xl text-gray-300 cursor-pointer' />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
