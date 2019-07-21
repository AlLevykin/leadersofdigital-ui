import React, {Fragment} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ProjectList = ({projects, onClick=f=>f}) =>
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
                    <th>Дата создания</th>
                    <th>Название</th>
                    <th>Комментарий</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                projects.map(project =>
                <tr key={project.id} bg="primary" text="white">
                    <td width="25%">{new Date(project.timestamp).toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}</td>
                    <td>{project.title}</td>
                    <td>{project.description}</td>
                    <td><Button variant="outline-primary" size="sm" onClick={() => onClick(project.id)} ><i className="fas fa-edit"></i></Button></td>
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