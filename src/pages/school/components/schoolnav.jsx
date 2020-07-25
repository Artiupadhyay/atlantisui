import React from 'react';
import {connect} from 'react-redux';

function SchoolNav(props){
    return(
      <div class="navbar">
      <ul className="nav nav-pills bg">
      <li className=" ml-3 p-2 bd-highlight">
        <a className="bd-highlight" href="#"><h1>Atlantis</h1></a>
      </li>
      
      <li className="nav-item">
        <div class="dropdown">
        <a className="content p-4 nav-link" href="/school/master">School Master</a>
    <div class="dropdown-content">
      <a href="#">Add School</a>
      <a href="#">View School</a>
      <a href="#">View School Report</a>
    </div>
   </div> 
                                    
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className="content p-4 nav-link" href="/school/master"> Fee Master</a>
        <div class="dropdown-content">
      <a href="addschool">Add fee Structure</a>
      <a href="viewschool">View Fee due</a>
      <a href="#">Deposit Fee</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="/admin/viewschool">Attendance Master</a>
        <div class="dropdown-content">
      <a href="#">View Employee Attendance</a>
      <a href="#">View Student Attendance</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="/admin/viewschool">Employee Master</a>
        <div class="dropdown-content">
      <a href="#">Add Employee</a>
      <a href="#">View classTeacher</a>
      <a href="#">View Employee</a>
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
        <a className=" content p-4 nav-link " href="/admin/viewschool">Education Portal</a>
        <div class="dropdown-content">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </div> 
      </li>
    </ul>
    </div>
    
    );
}
export default SchoolNav;