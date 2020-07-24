import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIconDefinition, SizeProp, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  color?: string;
  size?: SizeProp;
}

interface AbstractIconProps extends IconProps {
  prefix: IconPrefix;
  iconName: IconName;
}

const SOLID = 'fas';
// const REGULAR = 'far';
const BRAND = 'fab';

// Wrapper per icone FontAwesome
const Icon: React.FC<AbstractIconProps> = ({ size, prefix, iconName, color }) => (
  <FontAwesomeIcon color={color} size={size} icon={findIconDefinition({ prefix, iconName })} />
);


// Icons
//## Solid
export const EnvelopeIcon: React.FC<IconProps> = ({ size='2x', color='white' }) => (
  <Icon size={size}  color={color} prefix={SOLID} iconName="envelope" />
);

//## Brand
export const LinkedinIcon: React.FC<IconProps> = ({ size='2x', color='white' }) => (
    <Icon size={size}  color={color} prefix={BRAND} iconName="linkedin-in" />
);
export const GithubIcon: React.FC<IconProps> = ({ size='2x', color='white' }) => (
    <Icon size={size}  color={color} prefix={BRAND} iconName="github-alt" />
);
export const FacebookIcon: React.FC<IconProps> = ({ size='2x', color='white' }) => (
    <Icon size={size}  color={color} prefix={BRAND} iconName="facebook-f" />
);
