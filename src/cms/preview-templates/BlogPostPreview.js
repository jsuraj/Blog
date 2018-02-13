import React from 'react';
import { BlogPostTemplate } from '../../templates/blog-post-template';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn(['data', 'title'])}
    htmlContent={widgetFor('body')}
    date={widgetFor('date')}
  />
);

export default BlogPostPreview;
