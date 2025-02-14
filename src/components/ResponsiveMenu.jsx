import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { navLinks } from '../constants';

const ResponsiveMenu = ({ open, setOpen }) => {  // Receive setOpen prop
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className='absolute top-20 left-0 w-full h-screen z-50 bg-gray-800 bg-opacity-80'
        >
          <div className='relative w-full h-full'>
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}  // Close the menu
              className="absolute top-4 right-12 text-white text-3xl"
            >
              &times; {/* Close icon */}
            </button>

            {/* Menu content */}
            <div className='text-xl font-semibold uppercase bg-secondary text-white py-10 m-6 rounded-3xl'>
              <ul className='flex flex-col justify-center items-center gap-10'>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className='hover:text-primary dark:hover:text-secondary'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
