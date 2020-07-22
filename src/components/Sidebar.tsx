import React,{CSSProperties} from 'react';
import LinkWithIcon from './LinkWithIcon';
import InternalLink from './InternalLink';
import { Image, ListGroup } from 'react-bootstrap';

// Immagine profilo
import profile_image from '../images/profile-image.jpeg';

// Interface
interface iProps {
  color: string;
}

// Style consts

const bottomLinkStyle:CSSProperties = { 
  margin: '1vh auto' ,
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%'
};
const listGroupStyle :CSSProperties= {
  width: '80%',
  display: 'flex',
  margin: 'auto',
};
const listGroupItemStyle:CSSProperties= { backgroundColor: 'inherit', color: 'white' };
const sidebarStyle:CSSProperties = {
  height: '100%',
  // Diplay
  WebkitAlignItems: 'flex-start' /* Safari 7.0+ */,
  display: 'flex',
  flexDirection: 'column',
  // Align options
  textAlign: 'center',
  justifyContent : 'space-between'
};

const Sidebar: React.SFC<iProps> = props => {

  const imageStyle: CSSProperties = {
    maxWidth: '10vw',
    border: 'solid 0.5px ' + props.color,
    margin: '4vh auto',
    borderRadius : '5px'
  };

  return ( 
    <div style={sidebarStyle}>
      {/* Image */}
      <Image style={imageStyle} src={profile_image} thumbnail />
      <h2><i><b> Paolo Cattani </b></i></h2>
      {/* List */}
      <ListGroup style={listGroupStyle} variant="flush">
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
          <InternalLink link="#Knowledge"> Softwares </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Portfolio"> Portfolio </InternalLink>
        </ListGroup.Item>
        <ListGroup.Item style={listGroupItemStyle}>
          <InternalLink link="#Contacts"> Contacts </InternalLink>
        </ListGroup.Item>
      </ListGroup>

      {/* External Link */}
      <div style={bottomLinkStyle}>
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
