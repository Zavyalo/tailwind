/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  dackMode: 'selector',
  theme: {
    extend: {
      colors: {
        'custom-pinck': '#b553a1',
        'custom-blue': '#4d6ad1',
      },
    },
  },
  plugins: [],
}

