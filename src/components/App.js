import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Alert  from 'react-bootstrap/Alert'

import Menu from '../components/ui/Menu'

import { About } from './containers'

const App = () =>
  <div className="app">
    <Menu/>
    <Container fluid={true}>
      <Row>
        <Col>
          <About/>
        </Col>
      </Row>
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
          <Card bg="primary" text="white">
            <Card.Header><i className="fas fa-hammer"></i> Благоустройство</Card.Header>
            <Card.Body>
              <Card.Title className="text-white">Благоустройство детской площадки</Card.Title>
              <Card.Text>
                Описание проекта
              </Card.Text>
            </Card.Body>
          </Card>

          <Card bg="success" text="white">
            <Card.Header><i className="fas fa-thumbs-up"></i> Субботник</Card.Header>
            <Card.Body>
              <Card.Title className="text-white">Организация субботника</Card.Title>
              <Card.Text>
                Проект завершен.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card bg="danger" text="white">
            <Card.Header><i className="fas fa-times"></i> Забор</Card.Header>
            <Card.Body>
              <Card.Title className="text-white">Ремонт забора</Card.Title>
              <Card.Text>
                Проект отклонен
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr/>
        </Col>
      </Row>
    </Container>
    <Alert variant="light">
      <i className="fas fa-copyright"></i> 2019, Команда "Железяка"
    </Alert>
  </div>

export default App
