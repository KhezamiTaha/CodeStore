/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        envatoGreen: '#82b441',
        customGray: '#1a1a1a',
      },
    },
  },
  plugins: [],
}

