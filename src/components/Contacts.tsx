import React from 'react';
import { Card, ListGroup, Accordion } from 'react-bootstrap';

// Props interface
interface iProps {
  id?: string;
}

// Styles
const divStyle = {
  margin: 'auto',
  maxWidth: '100%',
  heigth: 'auto'
};

class Contacts extends React.Component<iProps> {
  static defaultProps = {
    id: ''
  };

  render() {
    return (
      <div id={this.props.id} style={divStyle}>
        <Accordion defaultActiveKey="0">
          <Card border={'warning'} className="text-center" id={'contacts'}>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                <h1>
                  <b>Contacts</b>
                </h1>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    
                    Phone :
                    <em>
                      
                      <b>+39 XXX XXXX XXX</b>
                    </em>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Email :
                    <em>
                      <b>paolocattani0501@gmail.com</b>
                    </em>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Contacts;
