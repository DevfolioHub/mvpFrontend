/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'lg': '1150px',
      // => @media (min-width: 1440px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'sm': '300px',
    },
  },
  plugins: [],
}

