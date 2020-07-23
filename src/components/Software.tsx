import React from 'react';
import { Card, ListGroup, CardDeck } from 'react-bootstrap';


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

export default class Home extends React.Component<iProps> {
  static defaultProps = {
    id: ''
  };

  render() {
    return (
      <div id={this.props.id} style={divStyle}>
        {/* Code Editor */}
        <CardDeck>
          <Card border={'warning'} className="text-center" id={'contacts'}>
            <Card.Header>
              <h1>
                <b> IDE </b>
              </h1>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Eclipse</ListGroup.Item>
                <ListGroup.Item>Vs Code</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          {/* Sql */}
          <Card border={'warning'} className="text-center" id={'contacts'}>
            <Card.Header>
              <h1>
                <b> SQL </b>
              </h1>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item >Dbeaver</ListGroup.Item>
                <ListGroup.Item>Squirrel</ListGroup.Item>
                <ListGroup.Item>Microsoft SQL Server</ListGroup.Item>
                <ListGroup.Item>IBM Client Access</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          {/* Ftp */}
          <Card border={'warning'} className="text-center" id={'contacts'}>
            <Card.Header>
              <h1>
                <b> FTP </b>
              </h1>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>Filezilla</ListGroup.Item>
                <ListGroup.Item>WinSCP</ListGroup.Item>
                <ListGroup.Item>Putty\SuperPutty</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          {/* Versioning */}
          <Card border={'warning'} className="text-center" id={'contacts'}>
            <Card.Header>
              <h1>
                <b> Version </b>
              </h1>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>GitHub Client ( Github ) </ListGroup.Item>
                <ListGroup.Item>SourceTree ( Generic )</ListGroup.Item>
                <ListGroup.Item>Jazz ( IBM )</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
