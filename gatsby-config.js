module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jams!',
        short_name: 'Jams',
        start_url: '/',
        background_color: '#1c5a7e',
        theme_color: '#c7c41d',
        display: 'minimal-ui',
        icon: 'src/images/musician.svg',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `songs`,
        path: `${__dirname}/songs/`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
