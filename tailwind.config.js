const primaryColor = '#DB73FF'
const bgColor = '#202124'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        bgColor
      },
      borderRadius: {
        layout: '1rem'
      },
      keyframes: {
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}
