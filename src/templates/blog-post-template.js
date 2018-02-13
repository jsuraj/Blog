import React from 'react';

import Content from '../components/Content';

class BlogPostTemplate extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, htmlContent} = this.props;
    return (
      <div className='blog-post-template'>
        <h2>{title}</h2>
        <Content content={htmlContent} />
      </div>
    )
  }
}

export default BlogPostTemplate;
