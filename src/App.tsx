// React
import React, { useEffect, useState } from 'react';

// Boostrap
import { Container,  Row, Col } from 'react-bootstrap';
// Components
import { Sidebar, Contacts, Experience, Education, Skill } from './components';

// Style
import appStyle from './style/app.module.scss';

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

  const components = [<Sidebar/>,<Contacts />,<Experience />,<Education />,<Skill />];

  return (
    <Container fluid className={appStyle.container}>
      {components.map(c => <Row className={'h-100'}><Col sm={12} className={'my-auto'}>{c}</Col></Row>)}
    </Container>
  );
};

export default App;
