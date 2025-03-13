// Modules
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/base.njk");

  /* Pass through */
  // eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("src/visuals");

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Filters
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Custom Collections

  eleventyConfig.addCollection("posts", function (collection) {
    // Filter posts to include only those with `status: show`
    const coll = collection
      .getFilteredByTag("posts")
      .filter((post) => post.data.status === "show");

    for (let i = 0; i < coll.length; i++) {
      const prevPost = i > 0 ? coll[i - 1] : null;
      const nextPost = i < coll.length - 1 ? coll[i + 1] : null;

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  // Custom Shortcodes

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk",
  };

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const fs = require("fs");

        // Serve the 404 page in development
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html");
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(content_404);
          res.end();
        });
      },
    },
  });
};
