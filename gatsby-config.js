module.exports = {
  siteMetadata: {
    siteUrl: "https://unitsapp.xyz/",
    title: "Units Converter",
    description: "Offline Units Converter",
    author: "Ignat Skoryh"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
