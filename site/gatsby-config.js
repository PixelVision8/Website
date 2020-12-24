module.exports = {
  siteMetadata: {
    title: 'Pixel Vision 8 - A Next Gen 8-Bit Fantasy Game Console',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer')
        ],
      },
      
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
  pathPrefix: "/PixelVision8Website"
}
