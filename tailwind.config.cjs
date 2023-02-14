/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        move: "move 1.5s ease-in-out infinite alternate",
        movealt: "movealt 1.5s ease-in-out infinite alternate"
      },
      keyframes: {
        move: {
          to: {
            transform: ' translateX(-100%)',
          },
        },
        movealt: {
          to: {
            transform: ' translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
