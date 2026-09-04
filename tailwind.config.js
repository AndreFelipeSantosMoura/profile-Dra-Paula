/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        primary: {
          bg: 'var(--bg-primary)',
          text: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          gold: 'var(--accent-gold)',
        },
        cta: {
          green: 'var(--cta-green)',
          hover: 'var(--cta-green-hover)',
        }
      },
    },
  },
  plugins: [],
}
