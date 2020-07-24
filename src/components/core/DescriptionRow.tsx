import React from 'react';
import {useTranslation} from "react-i18next";
import { Col, Row } from 'react-bootstrap';

interface DescriptionRowProps {
  label: string;
  description : string | JSX.Element;
  translate:boolean;
}

const DescriptionRow:React.FC<DescriptionRowProps> = ({label,description, translate}) => {
    const [t] = useTranslation('common');

    return (
        <Row className={`mb-0`}>
            <Col sm={3} className={'border-right border-secondary text-white text-right pr-4 pb-2 pt-2' }><em>{t(label)}</em></Col>
            <Col sm={9} className={'text-justify text-white pb-2 pt-2'}>
                {translate && typeof description === 'string' ? t(description) : description  }
            </Col>
        </Row>
    );
}

export default DescriptionRow;


