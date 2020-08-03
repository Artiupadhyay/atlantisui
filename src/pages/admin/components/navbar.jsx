import React from 'react';

function Navbar(props) {
  return(
    <div className=" d-flex row navbar bg">
    <div className className=" col-md-10 nav nav-pills ">
    <li className=" ml-3 p-2 bd-highlight">
      <a className="content" href="#"><h1>Atlantis</h1></a>
    </li>
    
    <li className="nav-item">
      <a className="content p-4 nav-link" href="/admin/addschool">AddUser</a>
    </li>

    <li className="nav-item">
      <a className=" content p-4 nav-link " href="/admin/viewschool">ViewUser</a>
    </li>
    </div>
    <div className="col-md-1">
    <div class="dropdown">
        <a className="content p-4 nav-link" href="#">Profile</a>
    <div class="dropdown-content">
      <a href="#">Name</a>
      <a href="#">Role</a>
      <a href="/logout">Logout</a>
    </div>
   </div> 
  </div>
  </div>
  
  
  
       );
}

export default Navbar;