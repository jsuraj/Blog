import React from 'react';
import Helmet from 'react-helmet';
import config from '../../siteconfig';

import BlogPostTemplate from './blog-post-template';
import { HTMLContent } from '../components/Content';
import Disqus from '../components/Disqus';


class BlogPost extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {markdownRemark: post} = this.props.data;
    return (
      <div className='blog-post'>
        <Helmet>
          <title>{post.frontmatter.title}</title>
          <meta name='description' content={post.frontmatter.description} />
          <meta name='keywords' content={post.frontmatter.keywords} />
          <meta property="og:title" content={post.frontmatter.title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={config.siteUrl+'/'+post.frontmatter.path} />
          <meta property="og:image" content={post.frontmatter.imageLink} />          
        </Helmet>
        <BlogPostTemplate
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          twitterHandle={post.frontmatter.twitterHandle}
          featuredImage={post.frontmatter.featuredImage}
          description={post.frontmatter.description}
          content={post.html}
          contentComponent={HTMLContent}
        />
        <Disqus postNode={post}/>
      </div>
    )
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        author
        twitterHandle
        title
        description
        keywords
        imageLink
        featuredImage {
            childImageSharp{
                sizes(maxWidth: 630, cropFocus: CENTER) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
      }
      fields {
        slug
      }
    }
  }
`;
