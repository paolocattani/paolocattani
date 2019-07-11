import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconName,
  IconPrefix,
  SizeProp
} from '@fortawesome/fontawesome-svg-core';

interface linkProps {
  link: string;
  icon: [IconPrefix, IconName];
  color?: string;
  size?: SizeProp;
}
const style = {
  margin: '5px 10px 0px 10px',
  display: 'inlime-block'
};

class LinkWithIcon extends React.Component<linkProps> {
  static defaultProps = {
    size: 'sm',
    color: 'white'
  };

  render() {
    return (
      <a
        style={style}
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={this.props.icon}
          color={this.props.color}
          size={this.props.size}
        />
        {this.props.children}
      </a>
    );
  }
}

export default LinkWithIcon;
