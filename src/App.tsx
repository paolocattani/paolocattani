import React from 'react';

// Fontawesome
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { fab as brandsIcon } from '@fortawesome/free-brands-svg-icons';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
import * as regularIcon from '@fortawesome/free-regular-svg-icons';
// Boostrap
import { Container, Col, Row } from 'react-bootstrap';

// Components
//import Header from './components/header';
import Sidebar from './components/sidebar';

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
  //const sidebar1stColor = '#6390ba';
  const sidebar1stColor = '#ff8400';
  const sidebar2ndColor = '#ffffff';

  var containerStyle = {
    margin: 0
  };
  var sidebarStyle = {
    backgroundColor: sidebar1stColor
  };

  return (
    <div className="App">
      <Container style={containerStyle}>
        <Row>
          <Col xs={leftWidth + 2} md={leftWidth} style={sidebarStyle}>
            <Sidebar color={sidebar2ndColor} />
          </Col>
          <Col xs={rightWidth - 2} md={rightWidth}>
            <p> prova </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
