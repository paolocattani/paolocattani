import React from 'react';
import '../style/internalLink.css';

interface InternalLinkProps {
  link: string;
}
const style = {
  fontSize: '2vh'
};

const InternalLink:React.FC<InternalLinkProps> = ({link, children}) =>
(
      <a id="internalLink" href={link} style={style}>
        {children}
      </a>
);

export default InternalLink;
