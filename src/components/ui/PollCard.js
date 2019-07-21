import React, {Fragment} from 'react';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const PollCard = ({project}) =>
<Fragment>
<Alert variant="success">
  <Alert.Heading>Организовано голосование по проекту {project.title}</Alert.Heading>
  <row>
  <p>
    {project.description}
  </p>
  </row>
  <hr />
  <row>
    <p>
      <Col>Поголосовало ЗА: {project.initiation.vote.for}</Col>
      <Col>Проголосовало ПРОТИВ: {project.initiation.vote.against}</Col>
     </p> 
  </row>

  
  <p className="mb-0">
    <Form>
        <row>
        <Col>
        <Form.Check type="radio" aria-label="radio 1" inline label="Согласен" id="vote1" />
        <Form.Check type="radio" aria-label="radio 2" inline label="Против" id="vote2"/>
        </Col>
        </row>
        <hr />
        <row>
        <Col><Button variant="primary" >Проголосовать</Button></Col>
        </row>
    </Form>

  </p>
</Alert>
    

</Fragment>

export default PollCard