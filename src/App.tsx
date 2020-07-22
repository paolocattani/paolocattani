// React
import React, { useEffect, useState } from 'react';
// Fontawesome
//import * as regularIcon from '@fortawesome/free-regular-svg-icons';
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { fab as brandsIcon } from '@fortawesome/free-brands-svg-icons';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
// Boostrap
import { Container, Col, Row } from 'react-bootstrap';
// Background image
import backgroundImage from './images/background.jpeg';
// Components
import { Contacts, Sidebar, Home, Software } from './components';

// Interface
interface appState {
  isSidebarVisibile: boolean;
}

// Constants
const rightWidth = 10;
const leftWidth = 2;
const resizeValue = 1;

//const sidebar1stColor = '#6390ba';
const sidebar1stColor = '#ff8400';
const sidebar2ndColor = '#ffffff';

const containerStyle = {
  margin: 0,
  // Image Props
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'top center',
  backgroundRepet: 'repeat'
};

const rowStyle = { height: '100%' };
const h1Style = { color: 'yellow', fontSize: '6vh' };
const sidebarStyle = {
  top: 0,
  left: 0,
  height: '100%',
  position: 'fixed' as 'fixed',
  backgroundColor: sidebar1stColor
};
const rightStyle = {
  // Diplay
  display: 'flex',
  flexDirection: 'column' as 'column',
  // Align options
  textAlign: '-webkit-center' as 'center',
  WebkitAlignItems: 'flex-start' /* Safari 7.0+ */
};

// Application
const App: React.FC = () => {
  // Loads fontawesome icon
  fontAwesomeLibrary.add(
    brandsIcon,
    solidIcon.faRandom,
    solidIcon.faReply,
    solidIcon.faIdCard,
    solidIcon.faUniversity
  );
  const [, setWindowWidth] = useState(window.innerWidth);

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
            style={sidebarStyle}
          >
            <Sidebar color={sidebar2ndColor} />
          </Col>
          <Col
            xs={{span: rightWidth - resizeValue,offset:leftWidth + resizeValue}}
            md={{span: rightWidth,offset:leftWidth}}
            style={rightStyle}
          >
            <h1 style={h1Style}>
              <em>
                <b>Work in progress !</b>
              </em>
            </h1>
            <Home />
            <Software id={'Software'} />
            <Contacts id={'Study'} />
            <Contacts id={'Contacts'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
