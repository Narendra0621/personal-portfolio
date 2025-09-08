/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        glass: 'rgba(255,255,255,0.06)',
        'glass-2': 'rgba(255,255,255,0.04)'
      }
    }
  },
  plugins: []
}
