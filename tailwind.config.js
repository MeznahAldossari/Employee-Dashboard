/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "rgba(36, 38, 41, 1)",
        "secondary": "rgba(35, 166, 132, 1)",
        "purple":"rgba(181, 164, 225, 1)",
        "secondary-purple":"rgba(83, 57, 121, 1)",
        "green":"rgba(23, 143, 114, 1)",
        "progress": "rgba(154, 127, 212, 1)",
        "internal":"rgba(35, 166, 132, 1)",
        "gray": "rgba(53, 59, 58, 0.6)",
        "secondary-gray": "rgba(85, 85, 85, 1 )"
        

      }
    },
  },
  plugins: [],
}

