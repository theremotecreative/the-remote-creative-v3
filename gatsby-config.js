module.exports = {
  siteMetadata: {
    title: `The Remote Creative`,
    description: `Modern Web Development with WordPress and Gatsby.js. Building lightning fast web apps with the latest react libraries and content management systems.`,
    keywords: `Gatsby.js, WordPress, GSAP, GreenSock, Modern Web Development, Fast Websites, Headless CMS, A/B Testing, Split Testing`,
    author: `@theremotecreative`,
    siteUrl: `https://theremotecreative.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-white-1x.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139848739-1`,
        head: true,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}
