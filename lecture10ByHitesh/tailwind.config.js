/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whiteShade: "#E5E7EB",
        blackShade: "#4B5563"
      }
    },
  },
  plugins: [],
}

