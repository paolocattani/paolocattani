import React from 'react';

interface LinkProps {
  link: string;
}

const Link:React.FC<LinkProps> = ({link, children}) => (
  <a href={link}
    target={link.startsWith('#') ? undefined : "_blank"}
    rel={link.startsWith('#') ? undefined : "noopener noreferrer"}
  >
    {children}
  </a>
);

export default Link;


