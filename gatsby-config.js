require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Aquario`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
          performance: false
        }
      }
    }
  ]
}
