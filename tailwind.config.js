/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Акценты
        primary: "#6366f1",
        primarySoft: "#eef2ff",

        // База
        background: "#f9fafb",   // общий фон страницы
        surface: "#ffffff",      // фон карточек / навбара

        // Текст
        textMain: "#0f172a",     // основной текст
        textMuted: "#6b7280",    // вторичный текст
        textGray: "#0f172a",     // 👈 алиас, чтобы старый класс продолжал работать

        // Границы
        borderSoft: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
