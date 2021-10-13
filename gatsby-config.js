module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "project",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckufw3wyn8tn101yzggmz9df4/master",
      }
    }
  ]
};
