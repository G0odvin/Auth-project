/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        tilium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        theme: {
          green: '#5c885c',
        }
      },
      spacing: {
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
}

