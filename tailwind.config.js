module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Arimo", "sans-serif"],
      title: ["Heebo", "sans-serif"],
    },
    minWidth: {
      '0': '0',
      '1/8': '12.5%',
      '1/6': '16%',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
