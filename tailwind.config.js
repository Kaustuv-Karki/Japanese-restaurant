/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kristi: ["Kristi", "sans-serif"], // Use the font name you imported
        labelle: ["La Belle Aurore", "cursive"],
        zen: ["Zen Dots", "sans-serif"],
        grechen: ["Grechen Fuemen"],
        montserrat: ["Montserrat"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
