import React from 'react';

function Navbar() {
  return(
    
    <ul className="nav nav-pills bg">
    <li className=" ml-3 p-2 bd-highlight">
      <a className="bd-highlight" href="#"><h1>Atlantis</h1></a>
    </li>
    
    <li className="nav-item">
      <a className="content p-4 nav-link" href="/admin/addschool">AddUser</a>
    </li>
    <li className="nav-item">
      <a className=" content p-4 nav-link " href="/admin/viewschool">ViewUser</a>
    </li>
  </ul>
  
  
  
       );
}

export default Navbar;