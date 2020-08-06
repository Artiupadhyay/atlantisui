import React from 'react';
import {Navbar, Nav ,NavDropdown, Image, Container} from 'react-bootstrap';

class EmployeeNavbar extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <Navbar className="shadow-lg navbar" expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="/student/dashboard">Atlantis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Attendance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/student/view/attendance">View Attendance</NavDropdown.Item>
                </NavDropdown>
               <NavDropdown title="Education Portal" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/student/view/tutorial">View Videos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Homework" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/student/view/homework">View Homework</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <NavDropdown title={localStorage.getItem('name') || "User name"} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/student/view/profile">
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

}

export default EmployeeNavbar;