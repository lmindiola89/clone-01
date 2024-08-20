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
        "custom-gradient":
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
      },
    },
    screens: {
      sm: "400px",
      // => @media (min-width: 576px) { ... }

      md: "600px",
      // => @media (min-width: 960px) { ... }

      lg: "960px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
export default config;
