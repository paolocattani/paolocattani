import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

// Props interface
interface HomeProps {
}

// Styles
const divStyle = {
  margin: '10vh auto',
  heigth: 'auto'
};

const Contacts:React.FC<HomeProps> = () => 
      <Card border={'warning'} className="text-center" id={'Contacts'}>
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

export default  Contacts;