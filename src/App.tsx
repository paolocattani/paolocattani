// React
import React, { useEffect, useState,CSSProperties } from 'react';

// Boostrap
import { Container, Col, Row } from 'react-bootstrap';
// Components
import { Contacts, Sidebar, Home, Experience } from './components';

// Style
import commonStyle from './style/common.module.scss';
import appStyle from './style/app.module.scss';

// Interface
interface appState {
  isSidebarVisibile: boolean;
}

const sidebar2ndColor = '#ffffff';

const h1Style:CSSProperties = { color: 'yellow', fontSize: '6vh' };

// Application
const App: React.FC = () => {
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
      <Container fluid className={appStyle.container}>
        <Row>
          <Col md={2} className={appStyle.sidebarContainer}>
            <Sidebar color={sidebar2ndColor} />
          </Col>
          <Col md={{span: 10,offset:2}}>
            <h1 style={h1Style}>
              <em><b>Work in progress !</b></em>
            </h1>
            <Home />
            <Experience />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
