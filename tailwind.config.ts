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
        portfolio: 'url("/Group 110.png")',
        appbg1: 'url("/appbg1.png")',
        appbg2: 'url("/appbg2.png")',
        appbg3: 'url("/appbg3.png")',
        'world': "url('/worldblack.gif')",
        'custom': "url('/b1.png')",
        'bgslide': "url('/Vector.png')",
        'summa': "url('/background.png')",
        'about': "url('/Vector3.png')",
        'second': "url('/second.png')",
        'customer': 'url("/White Waves Pattern.png")',
        'getin':'url("/getinbg.png")',
        'solution':'url("/Vector 71.png")',
      },
      screens: {
        "xs": '431px',
        "xs2": '530px',
        "leawidth":"320px",
        "lastwidth":'350px',
        'largewidth':'1050px',
        'largelast':'1100px',
      },
      fontSize: {
        "2xs": '0.7rem',
        "3xs": '0.6rem',
      },
      fontFamily: {
        font: ["inter", "italic"]
      },
      colors: {
        whytap: "#851B46",
        abhis: "#0D5D50",
        kush: "#EECF64",
        primarycolor: '#FF9315',
        grayColor:'#686868'
      }
    },
  },
  plugins: [],
};
export default config;
