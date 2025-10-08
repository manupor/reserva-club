/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f7',
          100: '#d9f0eb',
          200: '#b3e1d7',
          300: '#8dd2c3',
          400: '#67c3af',
          500: '#30544b',
          600: '#2a4a42',
          700: '#243f39',
          800: '#1e3530',
          900: '#182a27',
        },
        gold: {
          50: '#fdf8f0',
          100: '#faefd9',
          200: '#f5dfb3',
          300: '#f0cf8d',
          400: '#ebbf67',
          500: '#ba9141',
          600: '#a67f3a',
          700: '#926d33',
          800: '#7e5b2c',
          900: '#6a4925',
        },
        accent: {
          50: '#f0f9f7',
          100: '#d9f0eb',
          200: '#b3e1d7',
          300: '#8dd2c3',
          400: '#67c3af',
          500: '#30544b',
          600: '#2a4a42',
          700: '#243f39',
          800: '#1e3530',
          900: '#182a27',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
