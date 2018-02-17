import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post-template';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn(['data', 'title'])}
    author={entry.getIn(['data', 'author'])}
    description={entry.getIn(['data', 'description'])}
    content={widgetFor('body')}
  />
);

export default BlogPostPreview;
