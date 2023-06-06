/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        grey: {
          "100": "#303B5A",
          "200": "#C8C7FF",
          "300": "#EBF1FF",
        },
        red: "#FF5757",
        yellow: "#FFB01F",
        green: "#00BD91",
        blue: "#1125D4",
        gradient: {
          card: {
            "100": "#7857FF",
            "200": "#2E2BE9",
          },
          circle: {
            "100": "#4E21CA",
            "200": "#2421CA10",
          }
        }
      }
    },
  },
  plugins: [],
}
