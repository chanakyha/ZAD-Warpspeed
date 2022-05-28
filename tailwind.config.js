module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["emerald", "night"],
    darkTheme: "night",
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
