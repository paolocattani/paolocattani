import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmartLink from './smartLink';

// Immagine profilo
import profile_image from '../images/profile-image.jpeg';
//import logo from '../style/logo.svg'

const Header: React.FC = () => {
  var headerStyle = {
    backgroundColor: '#282c34',
    display: 'flex',
    color: 'white'
  };

  var imageStyle = {
    margin: '10px 30px 10px 50px',
    maxWidth: '8%',
    height: 'auto',
    borderRadius: '50%',
    border: 'solid 3px #FFF'
  };

  var profileStyle = {
    fontSize: '50px',
    margin: 0,
    marginTop: '30px'
  };

  return (
    <header style={headerStyle}>
      <img src={profile_image} style={imageStyle} alt="profile" />
      <div>
        <p style={profileStyle}>
          {' '}
          <FontAwesomeIcon icon={'random'} /> Paolo Cattani{' '}
        </p>
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
    </header>
  );
};

export default Header;
