import React from 'react';
import Alert  from 'react-bootstrap/Alert'

import Menu from './containers/Menu'
import Content from './ui/Content'

const App = () =>
  <div className="app">
    <Menu/>
    <Content/>
    <Alert variant="light">
      <i className="fas fa-copyright"></i> 2019, Команда "Железяка"
    </Alert>
  </div>

export default App
