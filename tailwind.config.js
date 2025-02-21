/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"];
export const theme = {
  extend: {
    backgroundImage: {
      "primary-gradient": "linear-gradient(30deg, #DC02C3, #5C53FE)",
    },
  },
};
export const plugins = [];
