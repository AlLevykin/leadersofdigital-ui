import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Menu = () =>
<Navbar variant="dark" fixed="top" bg="primary" expand="lg">
  <Navbar.Brand href="#home">Community projects</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><i className="fas fa-list"></i> Список проектов</Nav.Link>
      <NavDropdown title="Какие-то действия" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><i className="fas fa-hammer"></i> Действие 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><i className="fas fa-screwdriver"></i> Действие 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><i className="fas fa-wrench"></i> Еще что-то</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><i className="fas fa-tools"></i> Отдельное действие</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Menu