/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#EE5D26',
          'orange-hover': '#DC4F19',
          'orange-light': '#FFF5EE',
          navy: '#0E1D33',
          'navy-light': '#182C4B',
          'navy-card': '#142540',
          dark: '#111827',
          gray: '#556377',
          'light-gray': '#F5F6F9',
          border: '#E8ECF2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.1)',
        'orange-glow': '0 8px 24px -4px rgba(238, 93, 38, 0.35)',
      }
    },
  },
  plugins: [],
}

