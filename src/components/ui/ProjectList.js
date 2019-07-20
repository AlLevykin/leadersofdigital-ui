import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const ProjectList = ({projects}) =>
<Fragment>
    <Row>
    <Col>
        <h2><i className="fas fa-list"></i> Список проектов</h2>
    </Col>
    </Row>
    <Row>
    <Col>
      <div className="table-columns">
        {
            <Table striped bordered hover size="sm" text-align="right">
            <thead>    
            <tr>
                <td>Дата создания</td>
                <td>Название</td>
                <td>Комментарий</td>
            </tr>
            </thead>
            <tbody>  
            {
             projects.map(project =>
            <tr key={project.id} bg="primary" text="white">
                <td width="25%">{new Date(project.timestamp).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
            </tr>
            )}
            </tbody>
            </Table>
        }
        </div>
    </Col>
    </Row>
</Fragment>

export default ProjectList