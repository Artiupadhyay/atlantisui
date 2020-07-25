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
        <a className="content p-4 nav-link" href="">School Master</a>
    <div class="dropdown-content">
      <a href="/admin/addschool">Add School</a>
      <a href="/admin/viewschool">View School</a>
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
      <a href="#">View Employee Attendance</a>
      <a href="#">View Student Attendance</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="/admin/viewschool">Employee Master</a>
        <div class="dropdown-content">
      <a href="/school/employeereg">Add Employee</a>
      <a href="">View classTeacher</a>
      <a href="/school/viewemployeereg">View Employee</a>
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