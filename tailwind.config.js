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
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgb(0 0 0 / 30%), insent 0 -8px 8px -8px rgb(0 0 0 / 30%)',
      },
      dropShadow: {
        logo: '0px 1px 3px tgb(0 0 0 / 30%)',
      },
      fontSize: {
        logo: '3.5rem',
      }
    },
  },
  plugins: [],
}

