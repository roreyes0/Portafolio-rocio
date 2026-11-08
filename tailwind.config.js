/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#101D35",
          deep: "#0B162B",
          soft: "#182943"
        },
        gold: {
          DEFAULT: "#C6A66B",
          light: "#E3CEA5"
        },
        ivory: "#F5F2EA",
        slateblue: "#64748B"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", "serif"]
      },
      backgroundImage: {
        "world-map": "url('/assets/world-map.svg')",
        "diplomatic-glow": "radial-gradient(ellipse at top, rgba(198,166,107,.12), transparent 65%)"
      },
      boxShadow: {
        "gold-soft": "0 10px 30px rgba(198,166,107,.17)"
      }
    }
  },
  plugins: []
};
