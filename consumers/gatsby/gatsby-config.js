module.exports = {
  siteMetadata: {
    title: `tsdx-treeshaking-test`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: { production: true },
    },
  ],
}
