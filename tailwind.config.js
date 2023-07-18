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
          darkGreen: '#3d8b3d',
          lightenGray: '#ddd',
          tag: '#aaa',
          gray: '#bbb',
          darkestGray: '#373a3c',
          darkenGrey: '#999',
          pageHoverBg: '#eceeef',
          tagCloudBg: '#f3f3f3',
          tagItemBg: '#818a91',
          tagItemBgDarken: '#687077',
          lightGrey: '#ccc',
          a1: '#a1a1a1',
        }
      },
      spacing: {
        navItem: '0.425rem',
        0.3: '0.3rem',
        0.2: '0.2rem',
        tag: '0.6rem',
        25: '6.25rem'
      },
      boxShadow: {
        banner: 'inset 0 8px 8px -8px rgb(0 0 0 / 30%), insent 0 -8px 8px -8px rgb(0 0 0 / 30%)',
      },
      dropShadow: {
        logo: '0px 1px 3px tgb(0 0 0 / 30%)',
      },
      fontSize: {
        logo: '3.5rem',
        date: '0.8rem',
      },
      borderRadius: {
        buttonSm: '0.2rem',
        tag: '10rem',
      }
    },
  },
  plugins: [],
}

