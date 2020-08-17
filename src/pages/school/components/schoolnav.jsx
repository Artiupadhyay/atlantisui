import React from 'react';
import {Navbar, Nav ,NavDropdown, Image, Container} from 'react-bootstrap'

function SchoolNav(props){
    return(
      <Navbar className="shadow-lg navbar" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="/school/dashboard">Atlantis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Student" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/add/student">Add Student</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/students">View Student</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Attendance" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/add/employee/attendance">Add Employees Attendance</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/employee/attendance">View Employee Attendance</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/student/attendance">View Student Attendance</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Employee" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/employee/registration">Add Employee</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/employee">View Employee</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Class" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/add/class">Add Class</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/classes">View Classes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Subject" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/add/subject">Add Subject</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/subjects">View Subject</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Education Portal" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/add/tutorial">Add Video</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/tutorial">View Videos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Time Table" id="basic-nav-dropdown">
              <NavDropdown.Item href="/school/add/timetable">Add Time Table</NavDropdown.Item>
              <NavDropdown.Item href="/school/view/timetable">View Time Table</NavDropdown.Item>
            </NavDropdown>
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
export default SchoolNav;