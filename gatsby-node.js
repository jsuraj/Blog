/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require("path");
 const { createFilePath } = require('gatsby-source-filesystem')

 exports.createPages = ({ boundActionCreators, graphql }) => {
   const { createPage } = boundActionCreators;

   return graphql(`
     {
       allMarkdownRemark(
         sort: { order: DESC, fields: [frontmatter___date] }
         limit: 1000
       ) {
         edges {
           node {
             fields {
               slug
             }
             excerpt(pruneLength: 400)
             html
             id
             frontmatter {
               templateKey
               path
               date(formatString: "MMMM DD, YYYY")
               author
               twitterHandle
               title
               description
               keywords
             }
           }
         }
       }
     }
   `).then(result => {
     if (result.errors) {
       result.errors.forEach(e => console.error(e.toString()));
       return Promise.reject(result.errors);
     }

     return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
       const pagePath = node.frontmatter.path;
       createPage({
         path: pagePath,
         component: path.resolve(
           `src/templates/${String(node.frontmatter.templateKey)}.js`
         ),
         // additional data can be passed via context
         context: {
           path: pagePath
         }
       });
     });
   });
 };

 exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
   const { createNodeField } = boundActionCreators

   if (node.internal.type === `MarkdownRemark`) {
     const value = createFilePath({ node, getNode })
     createNodeField({
       name: `slug`,
       node,
       value,
     })
   }
 }
