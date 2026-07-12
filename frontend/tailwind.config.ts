import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        blue: "#2563EB",
        pink: "#EC4899",
        cyan: "#06B6D4",
        orange: "#F97316",
        green: "#22C55E",
        background: "#0F172A",
        cards: "#1E293B",
        textLight: "#F8FAFC",
      },
      animation: {
        'blob': 'blob 7s infinite',
        'typing': 'typing 2s steps(20, end)',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
