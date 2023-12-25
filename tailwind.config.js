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
          primary: "#0088e0",

          secondary: "#be4400",

          accent: "#ff0000",

          neutral: "#2f2225",

          "base-100": "#fffff8",

          info: "#00caff",

          success: "#00d872",

          warning: "#e03900",

          error: "#ffa4b8",
          body: {
            "background-color": "#f4f4f4",
          },
        },
      },
    ],
  },
  //...
};
