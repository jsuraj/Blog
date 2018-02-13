import React from 'react';

class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{__html: this.props.content}}
      />
    )
  }
}

export default Content;
