module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          fontFamily: {
              'sans': ['Inter', 'system-ui', '-apple-system', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
          },
          colors: {
              navy: {
                  DEFAULT: 'rgba(43,108,176,1)'
              }
          }
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
