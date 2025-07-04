import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      keyframes: {
        'pulseSize': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
        'ping-large':{
           '75%, 100%': { transform: 'scale(3)', opacity: '0' },
        },
        'moveLeft': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'moveRight': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
    },
      animation: {
        'pulse-size': 'pulseSize 1s ease-in-out infinite',
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'moveLeft 30s linear infinite',
        'move-right': 'moveRight 30s linear infinite',
      },
      fontFamily:{
        sans:'var(--font-sans)',
        serif:'var(--font-serif)',
      }
    },
  },
  plugins: [],
};
export default config;
