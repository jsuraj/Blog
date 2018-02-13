import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post-template';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

export default BlogPostPreview;
