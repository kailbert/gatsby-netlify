module.exports = {
  siteMetadata: {
    title: 'Pete Schilling',
    desc: 'Director DOP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylus',
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options:{
        name: 'src',
        path: `${__dirname}/src`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options:{
      //  excerpt_separator: `<!-- End -->`
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms'
  ],
};
