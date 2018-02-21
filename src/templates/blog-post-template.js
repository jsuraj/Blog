import React from 'react';
// import Link from 'gatsby-link';
import Img from 'gatsby-image';
import './blog-post-template.css';

import Content from '../components/Content';


class BlogPostTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      date,
      author,
      twitterHandle,
      featuredImage,
      description,
      content,
      contentComponent} = this.props;
    const PostContent = contentComponent || Content;
    return (
      <div className='blog-post-template'>
        <h1 className='blog-post-title'>{title}</h1>
        <h5 className='blog-post-date'>{date || ''}</h5>
        <h4 className='blog-post-author'>
          <a target="_blank" href={'https://twitter.com/'+twitterHandle}>
          {author}
          </a>
        </h4>
        <Img sizes={featuredImage.childImageSharp.sizes} />
        <h4>{description}</h4>
        <PostContent content={content} />
      </div>
    )
  }
}

export default BlogPostTemplate;
