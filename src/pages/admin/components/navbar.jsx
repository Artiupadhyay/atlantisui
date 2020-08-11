import React from 'react';
import {Navbar, Nav ,NavDropdown, Image, Container} from 'react-bootstrap';

function AdminNavbar(props) {
  return(
    <Navbar className="shadow-lg navbar" expand="lg" variant="dark">
    <Container>
    <Navbar.Brand href="/admin/dashboard">Atlantis</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/admin/addschool">Add School</Nav.Link>
      <Nav.Link href="/admin/viewschool">View School</Nav.Link>
        </Nav>
          <Nav>
          <NavDropdown title={localStorage.getItem('name') || "User name"} id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/profile">
                <Image src={localStorage.getItem('image')? "data:image/jpeg;base64,"+ localStorage.getItem('image') : require('./../../../user.png')} height={50} className="rounded"/>
              </NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>  
          </Nav> 
        </Navbar.Collapse>
        </Container>
        </Navbar>
       );
}

export default AdminNavbar;