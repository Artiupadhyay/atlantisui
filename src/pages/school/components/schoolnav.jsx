import React from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav ,NavDropdown, Image, Container} from 'react-bootstrap'
import config from '../../config';

function SchoolNav(props){
    return(
      <Navbar bg="info" expand="md" variant="light">
        <Container>
        <Navbar.Brand href="#home">Atlantis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/addstudent">Add Student</NavDropdown.Item>
              <NavDropdown.Item href="/school/viewstudent">View Student</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Attendance" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">View Employee Attendance</NavDropdown.Item>
              <NavDropdown.Item href="#">View Student Attendance</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/employeereg">Add Employee</NavDropdown.Item>
              <NavDropdown.Item href="/school/viewemployeereg">View Employee</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Class" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/employeereg">Add Class</NavDropdown.Item>
              <NavDropdown.Item href="/school/viewemployeereg">View Classes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Education Portal</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title={localStorage.getItem('name') || "User name"} id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/employeereg"><Image src={require('./../../../user.png')} height={50}/></NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>  
          </Nav>
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default SchoolNav;