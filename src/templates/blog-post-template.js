import React from 'react';

import Content from '../components/Content';

class BlogPostTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, date, content, contentComponent} = this.props;
    const PostContent = contentComponent || Content;
    return (
      <div className='blog-post-template'>
        <h2>{title}</h2>
        <h5>{date || ''}</h5>
        <PostContent content={content} />
      </div>
    )
  }
}

export default BlogPostTemplate;
