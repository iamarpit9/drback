import type { Config } from "tailwindcss";

const config: Config = {
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
      fontFamily: {
        open: ["var(--font-open)"],
        play: ["var(--font-play)"],
      },
      animation: {
        "spinner-grow-fast": "spinner-grow-fast 0.75s linear infinite",
        "spinner-grow-slow": "spinner-grow-slow 1.5s linear infinite",
      },
      keyframes: {
        "spinner-grow-fast": {
          "0%": { transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
        "spinner-grow-slow": {
          "0%": { transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
