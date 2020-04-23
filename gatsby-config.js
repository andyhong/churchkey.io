module.exports = {
  plugins: [
    `gatsby-plugin-react-svg`,
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
  ],
}
