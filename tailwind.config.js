/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
    },
  },
  plugins: [],
};
