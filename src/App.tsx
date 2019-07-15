import React from 'react';

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

interface appState {
  isSidebarVisibile: boolean;
}

const App: React.FC = () => {
  fontAwesomeLibrary.add(
    brandsIcon,
    solidIcon.faRandom,
    solidIcon.faReply,
    solidIcon.faIdCard,
    solidIcon.faUniversity
  );

  const rightWidth = 10;
  const leftWidth = 2;
  const resizeValue = 2;

  //const sidebar1stColor = '#6390ba';
  const sidebar1stColor = '#ff8400';
  const sidebar2ndColor = '#ffffff';

  const containerStyle = {
    margin: 0
  };
  const sidebarStyle = {
    backgroundColor: sidebar1stColor
  };

  const rowStyle = {
    height: '100vh'
  };

  var rightStyle = {
    height: '100%',
    // Diplay
    WebkitAlignItems: 'flex-start' /* Safari 7.0+ */,
    display: 'flex',
    flexDirection: 'column' as 'column',
    // Align options
    textAlign: '-webkit-center' as 'center'
  };

  return (
    <div className="App">
      <Container style={containerStyle}>
        <Row style={rowStyle}>
          <Col xs={leftWidth + resizeValue} md={leftWidth} style={sidebarStyle}>
            <Sidebar color={sidebar2ndColor} />
          </Col>
          <Col xs={rightWidth - resizeValue} md={rightWidth} style={rightStyle}>
            <Contacts id={'Contacts'} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
