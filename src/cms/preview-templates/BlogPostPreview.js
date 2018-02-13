import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post-template';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data', 'date'])}
    htmlContent={widgetFor('body')}
  />
);

export default BlogPostPreview;
