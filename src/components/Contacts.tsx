import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import LinkWithIcon from './LinkWithIcon';

// Props interface
interface props {
  id?: string;
}

// Styles
const divStyle = {
  margin: 'auto',
  maxWidth: '100%',
  heigth: 'auto'
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
            <ListGroup variant="flush">
              <ListGroup.Item>
                {' '}
                Phone :{' '}
                <em>
                  {' '}
                  <b>+39 XXX XXXX XXX</b>{' '}
                </em>
              </ListGroup.Item>
              <ListGroup.Item>
                {' '}
                Email :{' '}
                <em>
                  {' '}
                  <b>paolocattani0501@gmail.com</b>{' '}
                </em>{' '}
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkWithIcon
                  link="https://www.facebook.com/paolo.cattani.9"
                  icon={['fab', 'facebook-f']}
                  color={'black'}
                  size="2x"
                />
                <LinkWithIcon
                  link="https://github.com/paolocattani"
                  icon={['fab', 'github-alt']}
                  color={'black'}
                  size="2x"
                />
                <LinkWithIcon
                  link="https://www.linkedin.com/in/paolo-cattani-5913a5127/"
                  icon={['fab', 'linkedin-in']}
                  color={'black'}
                  size="2x"
                />
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Contacts;
