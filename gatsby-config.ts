import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Junior Talks`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss","gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-rss-feed',
    options: {
      url:'https://anchor.fm/s/916ca660/podcast/rss',
      name:'podcast'
    }
  },
]
};

export default config;
