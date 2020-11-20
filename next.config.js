// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   basePath: "/",
//   assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
//   compress: false,
// };

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
