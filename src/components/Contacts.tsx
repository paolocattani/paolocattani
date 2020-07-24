import React,{CSSProperties} from 'react';
import { Card } from 'react-bootstrap';
import commonStyle from '../style/common.module.scss'
// Props interface
interface HomeProps {}

const h1Style:CSSProperties = { color: 'yellow', fontSize: '6vh', margin:'10vh auto'};
const Contacts:React.FC<HomeProps> = () =>
    <Card border={'warning'} className={`text-center my-4 mx-auto ${commonStyle.darkBackground}`} id={'Contacts'}>
        <Card.Header className="text-white">
          <h1 style={h1Style}>
              <em><b>Work in progress !</b></em>
            </h1>
        </Card.Header>
        <Card.Body className="text-white">
          <p><cite><strong>
            La programmazione è una delle mie passioni e per questo non smetto mai di studiare ed apprendere nuove competenze.
            Conosco molto bene Java ( SE, EE ) e ho lavorato con Hibernate ( 4 e 5 ), Struts2 e Spring. In generale me la cavo bene con i Db relazionali ( DB2 , MS Sql, mySql/maria , Oracle ), meno con No-Sql .
            Negli ultimi anni sto utilizzando molto l'ecosistema React/ Nodejs ( React / Redux / Redux-Saga/ Nodejs / Express , Sequelize ) quindi ho una buona conoscenza di javascript , typescript, CSS e HTML, ( utilizzo sempre le piu recenti funzionalità grazie a Babel )
            In fine conosco la parte di infrastruttura ( JBoss da 6.4 a Wildfly 16 , Tomcat, Nginx ) , CI/CD ( Gitlab Runners su Docker ) e Container( per architetture a Microservizi e MicroFrontend ).
            </strong></cite></p>
        </Card.Body>
      </Card>

export default  Contacts;