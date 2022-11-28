/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'house': "url('./components/pics/house1.jpg')",

      }
    },
  },
  plugins: [require("daisyui")],
}
