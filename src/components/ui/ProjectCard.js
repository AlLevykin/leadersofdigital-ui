import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const ProjectCard = ({project}) =>
<Fragment>

    <Row>
    <Col>
        <div className="card-view">
        {
            
                <Card key={project.id} bg="primary" text="white">
                    <Card.Header><i className="fas fa-hammer"></i> {new Date(project.timestamp).toLocaleString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-white">{project.title}</Card.Title>
                        <Card.Text>
                        {project.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
        
        }
        </div>
    </Col>
    </Row>
    
 
</Fragment>

export default ProjectCard