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
            <Navbar.Brand href="/employee/employeedashboard">Atlantis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Student" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/employee/add/student">Add Student</NavDropdown.Item>
                  <NavDropdown.Item href="/employee/view/student">View Student</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Attendance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/employee/add/studentattendance">Add Student Attendance</NavDropdown.Item>
                  <NavDropdown.Item href="/employee/view/studentattendance">View Student Attendance</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Subject" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/school/add/subject">Add Subject</NavDropdown.Item>
                  <NavDropdown.Item href="/school/view/subjects">View Subject</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Education Portal" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/school/add/tutorial">Add Video</NavDropdown.Item>
                  <NavDropdown.Item href="/school/view/tutorial">View Videos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Homework" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/school/add/timetable">Add Homework</NavDropdown.Item>
                  <NavDropdown.Item href="/school/view/timetable">View Homework</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
              <NavDropdown title={localStorage.getItem('name') || "User name"} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/school/profile">
                    <Image src={localStorage.getItem('image')? "data:image/jpeg;base64,"+ localStorage.getItem('image') : require('./../../../user.png')} height={50} className="rounded"/>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Check Attendance</NavDropdown.Item>
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