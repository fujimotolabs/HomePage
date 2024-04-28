module.exports = {
  content: ["./src/**/*.vue", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
