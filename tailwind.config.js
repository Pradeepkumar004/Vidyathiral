/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
        secondary: '#F4A300',
        accent: '#F8F9FA',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Production optimizations
  mode: 'jit', // Just-In-Time mode for faster builds
  // Safelist important classes if they're generated dynamically
  safelist: [
    'animate-fadeIn',
  ],
}
