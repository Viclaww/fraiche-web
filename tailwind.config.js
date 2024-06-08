/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "hero-bg": "url('../../public/images/Header Image.png')",
      },

      colors: {
        "fraiche-yellow": "#FF9900",
        "flavour-green": "#07D55A",
        "black-prime": "#0F0F0F",
      },
      fontFamily: {
        porky: ["Porky's", "san-serif"],
      },
    },
  },
  plugins: [],
};
