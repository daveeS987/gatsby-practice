module.exports = {
  siteMetadata: {
    title: 'gatsby practice',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: `/my-cool-sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        /*
        - basePath defaults to `/`
        */
        basePath: `/blog`,
      },
    },
  ],
};
