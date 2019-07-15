import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const AboutJumbotron = ({about}) =>
<Jumbotron>
<h1>{about.name}</h1>
<p>
  {about.description}
</p>
<hr/>
<p className="lead">
Community projects
</p>
<p>
  <Button variant="primary">Узнать подробней <i className="fas fa-comment-dots"></i></Button>
</p>
</Jumbotron>

export default AboutJumbotron