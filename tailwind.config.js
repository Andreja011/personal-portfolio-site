/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/thanks.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "bg-color": "#1f242d",
        "second-bg-color": "#323946",
        "text-color": "#fff",
        "main-color": "#0ef",
      },
      boxShadow: {
        "glow-shadow": "0 0 1rem rgb(0 238 255)",
      },
      screens: {
        xl: { max: "1200px" },
        // => @media (max-width: 1200px) { ... }

        lg: { max: "991px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "450px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
