import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import About from '../containers/About'

const ProjectList = ({projects}) =>
<Fragment>
    <About/>
    <Row>
    <Col>
        <h2><i className="fas fa-list"></i> Список проектов</h2>
    </Col>
    </Row>
    <Row>
    <Col>
        <hr/>
    </Col>
    </Row>
    <Row>
    <Col>
        <div className="card-columns">
        {
            projects.map(project =>
                <Card key={project.id} bg="primary" text="white">
                    <Card.Header><i className="fas fa-hammer"></i> {new Date(project.timestamp).toLocaleString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Card.Header>
                    <Card.Body>
                        <Card.Title className="text-white">{project.title}</Card.Title>
                        <Card.Text>
                        {project.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
        </div>
    </Col>
    </Row>
    <Row>
    <Col>
        <hr/>
    </Col>
    </Row>
</Fragment>

export default ProjectList