import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmartLink from './smartLink';
import { Row } from 'react-bootstrap';

// Immagine profilo
import profile_image from '../images/profile-image.jpeg';
//import logo from '../style/logo.svg'

const Header: React.FC = () => {
  var style = {
    backgroundColor: '#282c34'
  };

  var imageStyle = {
    maxWidth: '50%',
    height: 'auto',
    borderRadius: '50%',
    border: 'solid 3px #FFF',
    marginLeft: '20px'
  };

  var profileStyle = {
    fontSize: '20px',
    marginLeft: '20px'
  };

  return (
    <div style={style}>
      <Row>
        <img src={profile_image} style={imageStyle} alt="profile" />
        <p style={profileStyle}>
          <FontAwesomeIcon icon={'random'} /> Paolo Cattani
        </p>
      </Row>
      <Row>
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
      </Row>
    </div>
  );
};

export default Header;
