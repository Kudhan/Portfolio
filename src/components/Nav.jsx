import React from 'react';
import { navLinks } from '../constants';
import { DiCisco } from "react-icons/di";
import { MdOutlineMenuOpen } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className='container flex justify-between items-center py-6'>
          {/* Logo Section */}
          <div className='text-4xl flex items-center gap-2 py-8 font-bold' >
            <DiCisco className='text-4xl text-white' />
            <p className='text-secondary dark:text-primary'>Kudhan</p>
          </div>
          
          {/* Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6 text-2xl text-gray-600'>
              {navLinks.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className='inline-block py-3 hover:text-secondary font-semibold dark:hover:text-primary'                      
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Hamburger Section */}
          <div className='md:hidden' onClick={() => setOpen(!open)}>
            <MdOutlineMenuOpen className='text-4xl text-gray-500' />
          </div>
        </div>
      </nav>
      
      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} setOpen={setOpen} /> {/* Pass setOpen as a prop */}
    </>
  );
};

export default Nav;
