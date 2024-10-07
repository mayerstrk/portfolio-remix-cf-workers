import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  lightMode: "selector",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          "50": "#f7f7fd",
          "100": "#eeeefb",
          "200": "#ddddf8",
          "300": "#cac9f3",
          "400": "#ada8eb",
          "500": "#978ce3",
          "600": "#8370d7",
          "700": "#6c55c3",
          "800": "#5740b0",
          "900": "#47348e",
          "950": "#2a1f5b",
        },
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
    },
    fontFamily: {
      sans: [
        '"Inter"',
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      display: ['"Poppins"', "sans-serif"],
    },
  },

  plugins: [],
} satisfies Config;
