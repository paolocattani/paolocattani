import React from 'react';
import '../style/internalLink.css';

interface iProps {
  link: string;
}
const style = {
  fontSize: '2vh'
};

class InternalLink extends React.Component<iProps> {
  static defaultProps = {};

  render() {
    return (
      <a id="internalLink" href={this.props.link} style={style}>
        {this.props.children}
      </a>
    );
  }
}

export default InternalLink;
