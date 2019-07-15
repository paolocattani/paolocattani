import React from 'react';
import LinkWithIcon from './LinkWithIcon';
import InternalLink from './InternalLink';
import { Image, ListGroup } from 'react-bootstrap';

// Immagine profilo
import profile_image from '../images/profile-image.jpeg';

interface sidebarProps {
  color: string;
}

const Sidebar: React.SFC<sidebarProps> = props => {
  var divStyle = {
    height: '100%',
    // Diplay
    WebkitAlignItems: 'flex-start' /* Safari 7.0+ */,
    display: 'flex',
    flexDirection: 'column' as 'column',
    // Align options
    textAlign: '-webkit-center' as 'center'
  };

  var imageStyle = {
    maxWidth: '60%',
    border: 'solid 0.5px ' + props.color,
    margin: '1vw 0vw'
  };

  var botStyle = {
    margin: '1vw 0vw'
  };

  var listGroupStyle = {
    maxWidth: '100%',
    margin: 'auto'
  };

  var listGroupItemStyle = {
    backgroundColor: 'inherit',
    color: 'white'
  };

  return (
    <div style={divStyle}>
      {/* Image */}
      <Image style={imageStyle} src={profile_image} thumbnail />

      {/* List */}
      <ListGroup style={listGroupStyle}>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Home"> Home </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Experience"> Experience </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Study"> Study </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Knowledge"> Knowledge </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Portfolio"> Portfolio </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#contacts"> Contacts </InternalLink>
        </ListGroup.Item>
      </ListGroup>

      {/* External Link */}
      <div style={botStyle}>
        <LinkWithIcon
          link="https://www.facebook.com/paolo.cattani.9"
          icon={['fab', 'facebook-f']}
          color={props.color}
          size="2x"
        />
        <LinkWithIcon
          link="https://github.com/paolocattani"
          icon={['fab', 'github-alt']}
          color={props.color}
          size="2x"
        />
        <LinkWithIcon
          link="https://www.linkedin.com/in/paolo-cattani-5913a5127/"
          icon={['fab', 'linkedin-in']}
          color={props.color}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Sidebar;
