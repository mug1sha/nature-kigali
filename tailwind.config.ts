import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { forest: "#183B2D", moss: "#78936B", cream: "#F5F2E9", ink: "#20251F" }, fontFamily: { display: ["Georgia", "serif"] } } },
  plugins: []
};
export default config;
