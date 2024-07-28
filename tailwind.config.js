/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-me": "#F7BE18",
        "gray-me": "#f5f5f7ff",
        "dark-me": "#4f4f4fff",
      },
      screens: {
        maxxx: "1200px",
        // max width
      },
      fontFamily: {
        Assistant: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
