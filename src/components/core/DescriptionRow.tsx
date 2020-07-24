import React from 'react';
import {useTranslation} from "react-i18next";
import { Col, Row } from 'react-bootstrap';
import commonStyle from '../../style/common.module.scss';

interface DescriptionRowProps {
  label: string;
  description? : string | JSX.Element;
  translate:boolean;
}

const DescriptionRow:React.FC<DescriptionRowProps> = ({label,description, translate}) => {
    const [t] = useTranslation('common');
    const tLabel = t(label);
    const tDescription = description && translate && typeof description === 'string' ? t(description) : description ;
    return (
        <Row className={`mb-0`}>
            <Col sm={3} className={'border-right border-secondary text-white text-right pr-4 ' }>
                {description ? <em>{tLabel}</em> : <h2 className={commonStyle.primaryColor}>{tLabel}</h2>}
            </Col>
            {tDescription ? <Col sm={7} className={'text-justify text-white '}>
                {tDescription}
            </Col> : null }
        </Row>
    );
}

export default DescriptionRow;


