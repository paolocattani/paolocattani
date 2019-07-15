import React from 'react';
import { Card } from 'react-bootstrap';

const Contacts: React.FC = () => {
  return (
    <div>
      <Card border={'warning'} className="text-center" id={'contacts'}>
        <Card.Header>Contacts</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
};

export default Contacts;
