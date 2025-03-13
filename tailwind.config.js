const remark = require("remark");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    files: ["./src/**/*.{html,js,jsx,md,njk}"],
    theme: {
      extend: {},
    },
    transform: {
      md: (content) => {
        return remark().process(content);
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  plugins: [require("tailwindcss-motion")],
  //...
};

const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownIt());
};
