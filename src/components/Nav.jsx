import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { DiCisco } from "react-icons/di";
import { MdOutlineMenuOpen } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar after 80vh (adjust as needed based on your hero height)
      const threshold = window.innerHeight * 0.8;
      if (window.scrollY > threshold) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-slate-900 z-50 shadow-md transition-all duration-500 ${
          showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container flex justify-between items-center h-20 px-6 md:px-12">
          {/* Logo */}
          <div className='text-3xl flex items-center gap-2 font-bold'>
            <DiCisco className='text-4xl text-white' />
            <p className='text-secondary dark:text-primary'>Kudhan</p>
          </div>

          {/* Desktop Nav */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-lg text-gray-300'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className='inline-block py-2 hover:text-secondary font-semibold dark:hover:text-primary transition-colors duration-300'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Menu */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdOutlineMenuOpen className='text-4xl text-gray-300' />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Nav;
