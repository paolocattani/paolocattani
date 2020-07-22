import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import LinkWithIcon from './LinkWithIcon';

// Props interface
interface HomeProps {
}

// Styles
const divStyle = {
  margin: '10vh auto',
  heigth: 'auto'
};

const Home:React.FC<HomeProps> = () => 
      <div id='Home' style={divStyle}>
        <Card border={'warning'} className="text-center" id={'contacts'}>
          <Card.Header>
            <h1>
              <b> Paolo Cattani </b>
            </h1>
          </Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Email :
                <em>
                  <b>paolocattani0501@gmail.com</b>
                </em>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>

export default  Home;