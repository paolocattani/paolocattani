import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

interface linkProps {
  link: string;
  icon: [IconPrefix, IconName];
}
const style = { margin: '5px 10px 0px 0px' };
const SmartLink: React.SFC<linkProps> = props => {
  return (
    <a
      style={style}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={props.icon} color="white" size="lg" />
    </a>
  );
};

export default SmartLink;
