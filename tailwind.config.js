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
        red: {
          strong: "#FF5757",
          low: "#FF575710"
        },
        yellow: {
          strong: "#FFB01F",
          low: "#FFB01F10"
        },
        green: {
          strong: "#00BD91",
          low: "#00BD9110"
        },
        blue: {
          strong: "#1125D4",
          low: "#1125D410"
        },
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
