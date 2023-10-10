/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: "'Inter', sans-serif"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
  darkMode: "class"
}

