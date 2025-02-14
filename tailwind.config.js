/** @type {import('tailwindcss').Config} */
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  // Enable dark mode using 'class' strategy
  theme: {
    extend: {
      fontFamily: {
        'libre': ['"Libre Baskerville"', 'serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'pacifico': ['"Pacifico"', 'cursive'],
      },
      colors: {
        primary: "#ff8901",  // Added color fix
        secondary: "#5BD2E7",  // Added color fix
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl': "6rem",
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      const allColors = flattenColorPalette(theme('colors'));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ':root': newVars,
      });
    },
  ],
}
