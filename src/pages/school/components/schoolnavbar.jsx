import React from 'react';
import {connect} from 'react-redux';

function SchoolNavbar(props){
    return(
      <div class="navbar">
      <ul className="nav nav-pills bg">
      <li className=" ml-3 p-2 bd-highlight">
        <a className="bd-highlight" href="#"><h1>Atlantis</h1></a>
      </li>
      
      <li className="nav-item">
        <div class="dropdown">
        <a className="content p-4 nav-link" href="">Student Master</a>
    <div class="dropdown-content">
      <a href="/school/addstudent">Add Student</a>
      <a href="/school/viewstudent">View Student</a>
      <a href="#">View School Report</a>
    </div>
   </div> 
                                    
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className="content p-4 nav-link" href=""> Fee Master</a>
        <div class="dropdown-content">
      <a href="">Add fee Structure</a>
      <a href="">View Fee due</a>
      <a href="#">Deposit Fee</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="">Attendance Master</a>
        <div class="dropdown-content">
      <a href="">View Employee Attendance</a>
      <a href="#">View Student Attendance</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="/admin/viewschool">Employee Master</a>
        <div class="dropdown-content">
      <a href="/school/employeeregistration">Add Employee</a>
      <a href="">View classTeacher</a>
      <a href="/school/viewemployee">View Employee</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="/admin/viewschool">Class Master</a>
        <div class="dropdown-content">
      <a href="#">Add Class</a>
      <a href="#">View Classes </a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
        <a className=" content p-4 nav-link " href="">Education Portal</a>
        <div class="dropdown-content">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </div> 
      </li>
      <li className="nav-item">
      <a className=" content p-4 nav-link " href="/logout">Logout</a>
    </li>
    </ul>
    </div>
    
    );
}
export default SchoolNavbar;