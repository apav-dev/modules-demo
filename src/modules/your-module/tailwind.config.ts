import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    colors: {
      "regal-blue": "#243c5a",
    },
  },
  plugins: [],
} satisfies Config;
