import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Poll from '../containers/Poll'


const ProjectCard = ({project}) =>
<Fragment>

        <div className="card-init">
        <h1>{project.title}</h1>    
        <Form> 
               <Form.Group> 
                <Form.Control plaintext readOnly hidden defaultValue={project.id} />
                <Row>
                    <Col><Form.Label >Время создания</Form.Label></Col>
                    <Col><Form.Control plaintext readOnly defaultValue={new Date(project.timestamp).toLocaleString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} /></Col>
                </Row>  
                <Row>
                    <Col><Form.Label >Заказчик</Form.Label></Col>
                    <Col><Form.Control plaintext readOnly defaultValue={project.initiation.stakeholders[0].name} /></Col>
                </Row>       
                <Row>
                    <Col><Form.Label >Руководитель проекта</Form.Label></Col>
                    <Col><Form.Control plaintext readOnly defaultValue={project.initiation.stakeholders[1].name} /></Col>
                </Row>    
                <Row>
                    <Col><Form.Label >Куратор</Form.Label></Col>
                    <Col><Form.Control plaintext readOnly defaultValue={project.initiation.stakeholders[2].name} /></Col>
                </Row>                                                          
                <Row>

                </Row>                      
                    </Form.Group>
              
               
      
        </Form>

        <Poll /> 
        </div>
            

            
    
 
 
</Fragment>

export default ProjectCard