import React from 'react';

import Content from '../components/Content';

class BlogPostTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, date, description, content, contentComponent} = this.props;
    const PostContent = contentComponent || Content;
    return (
      <div className='blog-post-template'>
        <h1>{title}</h1>
        <h5>{date || ''}</h5>
        <h4>{description}</h4>
        <PostContent content={content} />
      </div>
    )
  }
}

export default BlogPostTemplate;
