/** @type {import('tailwindcss').Config} */

import fontfamily from 'tailwindcss/fontFamily'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },
      fontfamily: {
        inter: ["var(--font-inter)", 'Inter', ...fontfamily.sans],
        graphik: ["var(--font-graphik)", 'Graphik', 'Helvetica'],
      }
    },
  },
};
