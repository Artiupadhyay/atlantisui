import React from 'react';
import {connect} from 'react-redux';

function SchoolNav(props){
    return(
      <div class=" d-flex row navbar bg">
      <div className=" col-md-10 nav nav-pills bg">
      <li className=" p-2 content nav-item">
        <a className="content" ><h1>Atlantis</h1></a>
      </li>
      
      <li className="nav-item">
        <div class="dropdown">
        <a className="content p-4 nav-link" href="#">School Master</a>
    <div class="dropdown-content">
      <a href="/school/addstudent">Add Student</a>
      <a href="/school/viewstudent">View School</a>
      <a href="#">View School Report</a>
    </div>
   </div> 
                                    
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className="content p-4 nav-link" href="#"> Fee Master</a>
        <div class="dropdown-content">
      <a href="">Add fee Structure</a>
      <a href="">View Fee due</a>
      <a href="#">Deposit Fee</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="#">Attendance Master</a>
        <div class="dropdown-content">
      <a href="#">View Employee Attendance</a>
      <a href="#">View Student Attendance</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="#">Employee Master</a>
        <div class="dropdown-content">
      <a href="/school/employeereg">Add Employee</a>
      <a href="">View classTeacher</a>
      <a href="/school/viewemployeereg">View Employee</a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
      <div class="dropdown">
        <a className=" content p-4 nav-link " href="#">Class Master</a>
        <div class="dropdown-content">
      <a href="#">Add Class</a>
      <a href="#">View Classes </a>
    </div>
   </div> 
      </li>
      <li className="nav-item">
        <div className="dropdown">
        <a className=" content p-4 nav-link " href="#">Education Portal</a>
        <div class="dropdown-content">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </div>
    </div> 
      </li>
      </div>
      <div className="col-md-1">
    <div class="dropdown">
        <a className="content p-4 nav-link" href="#">Profile</a>
    <div class="dropdown-content">
      <a href="#">Name</a>
      <a href="#">Role</a>
      <a href="./logout">Logout</a>
    </div>
   </div> 
  </div>
    </div>
    
    );
}
export default SchoolNav;