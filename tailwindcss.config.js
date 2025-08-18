// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        whiteCustom: "#e6f1ff",
        accentGreen: "#64ffda",
        accentGreenBg: "rgba(100, 255, 218, 0.1)", // ✅ fixed
      },
    },
  },
  plugins: [],
};
