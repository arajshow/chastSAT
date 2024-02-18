/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "LcornerColor" : "rgb(53, 65, 65)",
        "RcornerColor" : "rgb(45, 50, 46)",
        "midColor": "rgb(44, 46, 45)",
        "color1" : "rgb(201,223,236)",
        "highlight" : "rgb(237,255,135)",
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
      'clg': '1065px', // To handle progress-bar responsivness
    }
  },
  plugins: [],
};
