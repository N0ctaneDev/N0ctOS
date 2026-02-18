/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'dark-tertiary': '#2a2a2a',
        'primary-500': '#8b5cf6',
        'primary-600': '#7c3aed',
        'primary-400': '#a78bfa',
        'secondary-500': '#9333ea',
        'accent': '#a855f7',
      },
      fontFamily: {
        'tektur': ['Tektur', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        'gradient-primary': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
        'gradient-secondary': 'linear-gradient(135deg, #9333ea, #a855f7)',
      }
    },
  },
  plugins: [],
}
