import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-100": "var(--accent-color-red-100)",
        "indigo-300": "var(--accent-color-indigo-300)",
        "green-300": "var(--acctnt-color-green-300)",
        "green-opacity": "var(--green-opacity)",
        "amber-200": "var(--accent-color-amber-200)",
        "amber-opacity": "var(--amber-opacity)",
        "neutral-400": "var(--secondary-text-color)",
        "rose-400": "var(--accent-color-rose-400)",
        "rose-opacity": "var( --rose-opacity)",
        "page-bg-color": "var(--page-bg-color)",
      },
    },
  },

  plugins: [],
};
export default config;
