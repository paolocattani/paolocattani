import React from 'react';
import '../style/internalLink.css';

interface linkProps {
  link: string;
  color?: string;
}

class InternalLink extends React.Component<linkProps> {
  static defaultProps = {
    size: 'sm',
    color: 'white'
  };

  render() {
    return (
      <a id="internalLink" href={this.props.link}>
        {this.props.children}
      </a>
    );
  }
}

export default InternalLink;
