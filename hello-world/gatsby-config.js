/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "MANADJA",
                fieldName: "manadja",
                url: "http://localhost:7000/api/graphql",
            },
        },
    ],
};