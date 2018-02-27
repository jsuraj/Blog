import React from 'react';
import Link from 'gatsby-link';

import PostList from '../components/PostList';

class IndexPage extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
        <PostList postEdges={postEdges} />
    )
  }
}

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          excerpt
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
            twitterHandle
            title
            description
            keywords
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 630, maxHeight: 200, cropFocus: CENTER) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
