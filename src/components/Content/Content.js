import React from 'react';

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={className}>{content}</div>
    )
  }
}

export default Content;

export const HTMLContent = ({ content, className}) => (<div
  className={className}
  dangerouslySetInnerHTML={{ __html: content}}
 />);
