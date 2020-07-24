import React from 'react';
import { Card } from 'react-bootstrap';
import DescriptionRow from './core/DescriptionRow';
import commonStyle from '../style/common.module.scss'
// Props interface
interface HomeProps {}

const Contacts:React.FC<HomeProps> = () =>
    <Card border={'warning'} className={`text-center my-4 mx-auto ${commonStyle.darkBackground}`} id={'Contacts'}>
        <Card.Header className="text-white">
          <h1>
            <b> Paolo Cattani </b>
          </h1>
        </Card.Header>
        <Card.Body className="text-white">
          <p>
            Ciao SOno paolo
          </p>
          <DescriptionRow label={'Email'} translate={false} description={<em><b>paolocattani0501@gmail.com</b></em>}/>
        </Card.Body>
      </Card>

export default  Contacts;