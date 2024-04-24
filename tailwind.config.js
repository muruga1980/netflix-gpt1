/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./img/netflix_bg.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
    variants: {
      extend: {
        backgroundColor: ["disabled"],
      },
    },
  },
  plugins: [],
};
