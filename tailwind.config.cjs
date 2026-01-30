module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070B',
        surface: '#0B1220',
        steel: '#B4C0D1',
        accent: {
          DEFAULT: '#60A5FA',
          strong: '#3B82F6'
        }
      },
      fontFamily: {
        display: ['"Yeseva One"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Quicksand', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
}
