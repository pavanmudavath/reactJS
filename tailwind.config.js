/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': '#3a4452',
        'transparent': 'transparent',
      },
      borderRadius: {
        'custom': '10px',
      },
      boxShadow: {
        'custom': '-8px -8px 15px rgba(255,255,255,0.1), 5px 5px 15px rgba(0,0,0,0.2)',
      },
     
    },
  },
  plugins: [],
}