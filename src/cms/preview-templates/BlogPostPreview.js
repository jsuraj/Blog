import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post-template';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
