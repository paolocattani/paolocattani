import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

// Props interface
interface props {
  id?: string;
}

// Styles
const divStyle = {
  margin: 'auto'
};

class Contacts extends React.Component<props> {
  static defaultProps = {
    id: ''
  };

  render() {
    return (
      <div id={this.props.id} style={divStyle}>
        <Card border={'warning'} className="text-center" id={'contacts'}>
          <Card.Header>
            <h1>
              <b>Contacts</b>
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Phone :{' '}
                  <em>
                    <b>+39 347 2545 771</b>
                  </em>
                </ListGroup.Item>
                <ListGroup.Item>
                  Email :{' '}
                  <em>
                    <b>paolocattani0501@gmail.com</b>
                  </em>{' '}
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Contacts;
