import React, { useEffect, useState } from 'react';

// Fontawesome
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { fab as brandsIcon } from '@fortawesome/free-brands-svg-icons';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
//import * as regularIcon from '@fortawesome/free-regular-svg-icons';

// Boostrap
import { Container, Col, Row } from 'react-bootstrap';

// Components
import Sidebar from './components/Sidebar';
import Contacts from './components/Contacts';
// Background image
import backgroundImage from './images/background.jpeg';
import backgroundImage2 from './images/background2.jpeg';

// Interface
interface appState {
  isSidebarVisibile: boolean;
}

// Constants
const rightWidth = 10;
const leftWidth = 2;
const resizeValue = 2;

//const sidebar1stColor = '#6390ba';
const sidebar1stColor = '#ff8400';
const sidebar2ndColor = '#ffffff';

const containerStyle = { margin: 0 };
const sidebarStyle = { backgroundColor: sidebar1stColor };
const rowStyle = { height: '100vh' };
const rightStyle = {
  height: '100%',
  // Diplay
  WebkitAlignItems: 'flex-start' /* Safari 7.0+ */,
  display: 'flex',
  flexDirection: 'column' as 'column',
  // Align options
  textAlign: '-webkit-center' as 'center',
  // Image
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'top center',
  backgroundRepet: 'repeat'
};

const App: React.FC = () => {
  fontAwesomeLibrary.add(
    brandsIcon,
    solidIcon.faRandom,
    solidIcon.faReply,
    solidIcon.faIdCard,
    solidIcon.faUniversity
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <div className="App">
      <Container style={containerStyle} fluid>
        <Row style={rowStyle}>
          <Col
            xs={leftWidth + resizeValue}
            md={leftWidth}
            lg={leftWidth}
            xl={leftWidth}
            style={sidebarStyle}
            className={'sticky-top'}
          >
            <Sidebar color={sidebar2ndColor} />
          </Col>
          <Col
            xs={rightWidth - resizeValue}
            md={rightWidth}
            lg={rightWidth}
            xl={rightWidth}
            style={rightStyle}
          >
            <Contacts id={'Contacts'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
