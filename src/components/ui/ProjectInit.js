import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'


const ProjectCard = ({project}) =>
<Fragment>

    <Row>
    <Col>
        <div className="card-init">
        <h1>{project.title}</h1>    
        <Form> 
            <row>
               <Form.Group> 
                <Form.Control plaintext readOnly hidden defaultValue={project.id} />
                <Form.Control plaintext readOnly defaultValue={new Date(project.timestamp).toLocaleString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} />
                <Form.Control plaintext readOnly defaultValue={project.description} />
                <Form.Control plaintext readOnly defaultValue={project.initiation.vote.against} />
               </Form.Group> 
            </row>    
      
        </Form>
        </div>
            

            
        
      
    </Col>
    </Row>
    
 
</Fragment>

export default ProjectCard