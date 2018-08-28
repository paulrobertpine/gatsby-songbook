module.exports = {
  siteMetadata: {
    title: `Songbook`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `songs`,
        path: `${__dirname}/songs/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jams!",
        short_name: "Jams",
        start_url: "/",
        background_color: "#1c5a7e",
        theme_color: "#c7c41d;",
        display: "minimal-ui",
        icon: "src/images/microphone.png",
      },
    },
    `gatsby-plugin-offline`
  ],
};