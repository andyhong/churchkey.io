module.exports = {
  siteMetadata: {
    title: `Churchkey`,
    description: `Innovative solutions for the modern church`,
    author: `@churchkeyio`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Karla`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Churchkey`,
        short_name: `Churchkey`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#151945`,
        display: `minimal-ui`,
        icon: `src/assets/door.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        addPageHeaders: [
          `cache-control: public, max-age=0, must-revalidate`,
        ],
      },
    },
  ],
}
