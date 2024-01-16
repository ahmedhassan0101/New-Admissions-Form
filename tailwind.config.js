/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"),

  function ({ addUtilities }) {
    const newUtilities = {
      '.scrollbar-hidden::-webkit-scrollbar': {
        display: 'none',
      },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};
