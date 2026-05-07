/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        primarySoft: "#eef2ff",

        background: "#f9fafb",
        surface: "#ffffff",

        textMain: "#0f172a",
        textMuted: "#6b7280",
        textGray: "#0f172a", 
        textHeading: "#1e293b",

        borderSoft: "#e5e7eb",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
