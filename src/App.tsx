// React
import React, { useEffect, useState,CSSProperties } from 'react';

// Boostrap
import { Container, Col, Row } from 'react-bootstrap';
// Components
import { Sidebar, Contacts, Experience, Education, Skill } from './components';

// Style
import appStyle from './style/app.module.scss';

// Interface
interface appState {
  isSidebarVisibile: boolean;
}

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
    <Container fluid className={appStyle.container}>
      <Row>
        <Col md={2} className={appStyle.sidebar}>
          <Sidebar/>
        </Col>
        <Col md={{span: 8,offset:3}} className={appStyle.body}>
          <h1 style={h1Style}>
            <em><b>Work in progress !</b></em>
          </h1>
          <Contacts />
          <Experience />
          <Education />
          <Skill />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
