import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

class Disqus extends React.Component {

  constructor(props) {
    super(props);
  }

  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    return (
      <ReactDisqusComments
        shortname="jsuraj-disqus-com"
        identifier={post.title}
        title={post.title}
        url="http://jsuraj.netlify.com"
        // category_id="123456"
        onNewComment={this.handleNewComment}/>
    );
  }
}

export default Disqus;
