const { colors: defColors } = require(`tailwindcss/defaultTheme`)
const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'russo': ['"Russo One"', 'sans-serif'],
      'javanese': ['Javanese', 'serif']
    },
    extend: {
      colors: {
        primary: {
          50: "#ffefd4",
          100: "#ffdfa8",
          300: "#ffd893",
          600: "#feb026",
          700: "#986a17",
          800: "#332308",
          900: "#191204",
        },
        "light-grey-blue": "#e7eff7",
        "dark-grey": "#0d080d",
        orange: colors.orange,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      backgroundImage: {
        'gradient-black-to-b': 'linear-gradient(black, rgba(0,0,0,.7), transparent)'
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}
