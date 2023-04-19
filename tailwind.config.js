/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './public/thanks.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'bg-color': '#1f242d',
        'second-bg-color': '#323946',
        'text-color': '#fff',
        'main-color': '#0ef',
      },
      boxShadow: {
        'glow-shadow': '0 0 1rem rgb(0 238 255)',
      },
    },
  },
  plugins: [],
};
