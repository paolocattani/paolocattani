import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmartLink from './smartLink';
import { Image, ListGroup } from 'react-bootstrap';

// Immagine profilo
import profile_image from '../images/profile-image.jpeg';

const Sidebar: React.FC = () => {
  var divStyle = {
    width: '100%',
    textAlign: 'center' as 'center'
  };

  var imageStyle = {
    maxWidth: '50%',
    height: 'auto',
    border: 'solid 3px #FFF'
  };

  var profileStyle = {
    fontSize: '20px'
  };

  var botStyle = {
    position: 'absolute' as 'absolute',
    bottom: '0',
    marginBottom: '10px'
  };
  return (
    <div style={divStyle}>
      <Image style={imageStyle} src={profile_image} roundedCircle fluid />
      <p style={profileStyle}> Paolo Cattani </p>
      <ListGroup>
        <ListGroup.Item color={'green'}> HOME </ListGroup.Item>
        <ListGroup.Item> STUDY </ListGroup.Item>
        <ListGroup.Item> PROVA </ListGroup.Item>
        <ListGroup.Item> PROVA2 </ListGroup.Item>
      </ListGroup>
      <div style={botStyle}>
        <SmartLink
          link="https://www.facebook.com/paolo.cattani.9"
          icon={['fab', 'facebook-f']}
        />
        <SmartLink
          link="https://github.com/paolocattani"
          icon={['fab', 'github-alt']}
        />
        <SmartLink
          link="https://www.linkedin.com/in/paolo-cattani-5913a5127/"
          icon={['fab', 'linkedin-in']}
        />
      </div>
    </div>
  );
};

export default Sidebar;
