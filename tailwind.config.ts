import type { Config } from "tailwindcss";
import life from './public/life.png';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg: 'url("/life.png")',
        why: 'url("/why.png")',
        test: 'url("/testimonial.png")',
        portfolio:'url("/Group 110.png")',
        appbg1:'url("/appbg1.png")',
        appbg2:'url("/appbg2.png")',
        appbg3:'url("/appbg3.png")',
      },
      fontFamily: {
        font: ["inter", "italic"]
      }
    },
  },
  plugins: [],
};
export default config;
