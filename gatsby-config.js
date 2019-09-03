module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Songbook',
        short_name: 'Songbook',
        start_url: '/',
        background_color: '#1c5a7e',
        theme_color: '#c5cc00',
        display: 'standalone',
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
