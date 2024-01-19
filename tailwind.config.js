module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        leagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
  },
  /* ,
	daisyui: {
    themes: ["light", "dark"],
	} */
  daisyui: {
    themes: [
      {
        light: {
          primary: "#718238",
          secondary: "#365314",
          accent: "#232323",
          neutral: "#9ca3af",
          "base-100": "#f3f4f6",
          info: "#047857",
          success: "#bef264",
          warning: "#fde047",
          error: "#ef4444",
        },
        dark: {
          primary: "#B0C763",
          secondary: "#f3f4f6",
          accent: "#6b7280",
          neutral: "#9ca3af",
          "base-100": "#232323",
          info: "#047857",
          success: "#bef264",
          warning: "#fde047",
          error: "#ef4444",
        },
      },
    ],
  },
};
