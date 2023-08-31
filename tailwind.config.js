/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f22f2f",
          200: "#ab0c0c",
          300: "#BD2217",
          400: "#EE2E2E"
        },

        secondary: "#22376F"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      boxShadow: {
        "3xl": "0px 6px 15px rgba(11, 180, 159, 0.15)",
        mobile: "0px 6px 16px rgba(0, 0, 0, 0.08)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [
  
    // ...
  ]
};
