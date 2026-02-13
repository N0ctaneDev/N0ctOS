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
        'primary-500': '#00d4ff',
        'primary-600': '#0099cc',
        'primary-400': '#33e0ff',
        'secondary-500': '#ff6b35',
        'accent': '#ff8c42',
      },
      fontFamily: {
        'tektur': ['Tektur', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
        'gradient-primary': 'linear-gradient(135deg, #00d4ff, #0099cc)',
        'gradient-secondary': 'linear-gradient(135deg, #ff6b35, #ff8c42)',
      }
    },
  },
  plugins: [],
}
