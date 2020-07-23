import React from 'react';

interface LinkProps {
  link: string;
}

const Link:React.FC<LinkProps> = ({link, children}) => (
  <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
);

export default Link;


