import React from 'react';

// Fontawesome
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import { fab as brandsIcon } from '@fortawesome/free-brands-svg-icons';
import * as solidIcon from '@fortawesome/free-solid-svg-icons';
// Boostrap
import { Container, Col, Row } from 'react-bootstrap';

// Components
//import Header from './components/header';
import Sidebar from './components/sidebar';

interface appState {
  isSidebarVisibile: boolean;
}

const App: React.FC = () => {
  fontAwesomeLibrary.add(brandsIcon, solidIcon.faRandom, solidIcon.faReply);

  var containerStyle = {
    margin: 0
  };
  var sidebarStyle = {
    backgroundColor: 'red',
    height: '-webkit-fill-available'
  };

  const rightWidth = '10';
  const leftWidth = '2';

  return (
    <div className="App">
      <Container style={containerStyle}>
        <Row>
          <Col xs={leftWidth} md={leftWidth} style={sidebarStyle}>
            <Sidebar />
          </Col>
          <Col xs={rightWidth} md={rightWidth}>
            <p> prova </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
