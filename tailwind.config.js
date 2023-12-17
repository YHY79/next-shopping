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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fecaca",

          secondary: "#f472b6",

          accent: "#fca5a5",

          neutral: "#f0abfc",

          "base-100": "#ffffff",

          info: "#818cf8",

          success: "#0ea5e9",

          warning: "#f87171",

          error: "#ff788a",
          body: {
            "background-color": "#f4f4f4",
          },
        },
      },
    ],
  },
  //...
};
