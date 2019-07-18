import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import C from '../../store/constants'

const MainMenu = ({onCreateProject=f=>f}) => {

  const handleSelect = eventKey =>
  {
    switch (eventKey) {
      case C.CREATE_PROJECT:
      {
        onCreateProject()
        break
      }
      default: {}
    }
  }

  return (
    <Navbar variant="dark" fixed="top" bg="primary" expand="lg" onSelect={handleSelect}>
      <Navbar.Brand href="#">Community projects</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Проекты" id="basic-nav-dropdown">
            <NavDropdown.Item eventKey=""><i className="fas fa-list"></i> Список проектов</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey={C.CREATE_PROJECT}><i className="fas fa-plus"></i> Создать проект</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainMenu