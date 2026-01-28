import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["var(--font-sora)"],
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        green: "#1E7F4E",
        greenLight: "var(--green-light)",
        energy: "var(--energy)",
        energySoft: "var(--energy-soft)",
        bg: "var(--bg)",
        text: "var(--text)",
        whiteSoft: "#FDFEFE",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
