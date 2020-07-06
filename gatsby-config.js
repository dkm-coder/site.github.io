/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Dave Martinez',
    description: 'Front-End Engineer',
    siteUrl: `https://dave-martinez.dev`
  },
  plugins: [
    `gatsby-plugin-feed`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/posts`,
      }
    },
  ],
}
