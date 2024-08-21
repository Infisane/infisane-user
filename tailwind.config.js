/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        overlayy: "rgba(25, 28, 31, 0.5)",
        dark: "#1E1E1E",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(0deg, #004A99BF,  #FFFFFFBF)",
      },
    },
  },
  plugins: [],
};

