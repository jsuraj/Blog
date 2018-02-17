import React from 'react';

import PostPreview from '../PostPreview';

class PostList extends React.Component {

  getPostList = () => {
    const postList = [];
    this.props.postEdges.map(postEdge => {
      postList.push({
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        author: postEdge.node.frontmatter.author,
        twitterHandle: postEdge.node.frontmatter.twitterHandle,
        path: postEdge.node.frontmatter.path,
        excerpt: postEdge.node.excerpt,
        featuredImage: postEdge.node.frontmatter.featuredImage.childImageSharp.sizes
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div className='postlist'>
        {postList.map(post => (
          <PostPreview key={post.title} postInfo={post} />
        ))}
      </div>
    )
  }
}

export default PostList;
