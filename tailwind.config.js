module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Акцент
        primary: "#6366f1",      // мягкий индиго/фиолет
        primarySoft: "#eef2ff",  // светлый фон под акцент

        // База
        background: "#f9fafb",   // общий фон страницы (очень светло-серый)
        surface: "#ffffff",      // фон карточек / навбара

        // Текст и границы
        textMain: "#0f172a",     // основной текст (почти чёрный)
        textMuted: "#6b7280",    // вторичный текст (подписи)
        borderSoft: "#e5e7eb",   // границы карточек/секции
      },
    },
  },
  plugins: [],
};
