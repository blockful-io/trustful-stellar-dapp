import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "rgba(22, 22, 23, 1)",
        brandWhite: "rgba(245, 255, 255, 1)",
        whiteOpacity008: "rgba(245, 255, 255, 0.08)",
        whiteOpacity005: "rgba(245, 255, 255, 0.5)",
        brandGreen: "rgba(177, 239, 66, 1)",
        othersRed: "rgba(239, 87, 66, 1)",
        grey02: "rgba(45, 46, 47, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
