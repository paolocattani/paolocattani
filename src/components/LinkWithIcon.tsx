import React from 'react';
import '../style/LinkWithIcon.css';
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
  display: 'inline-block'
};

const iconStyle = {
  fontSize: '5vh',
  padding: '0.5vh'
};

class LinkWithIcon extends React.Component<linkProps> {
  static defaultProps = {
    size: 'xs',
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
          style={iconStyle}
          className={'xlinkWithIcon'}
        />
        {this.props.children}
      </a>
    );
  }
}

export default LinkWithIcon;
