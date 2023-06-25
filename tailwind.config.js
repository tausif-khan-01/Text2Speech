/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        
      },
      backgroundImage: {
        'icon-down': "url('./public/down-arrow.svg')",
        
      }
      
    },
  },
  plugins: [],
}
